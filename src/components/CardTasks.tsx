import { AxiosResponse } from "axios";
import { useContext, useState } from "react";
import { FiCalendar, FiCheckCircle, FiClock, FiFileText, FiMoreVertical, FiRefreshCcw, FiUser } from "react-icons/fi";
import { getColaborators, getTasks } from "../api/getMethods";
import { Dropdown } from "./Dropdown";
import { Modal } from "./Modal";
import { Text } from "./Text";
import { CardProps } from "./types";
import projectsContext, { StateProps } from "../context/ProjectsContext";
import { ColaboratorProps } from "../pages/types";
import { createTimer } from "../api/postMethods";
import { Input } from "./Input";
import toast from "react-hot-toast";
import { ButtonSecondary } from "./Button";
import { Loading } from "./Loading";

export function CardTasks({actionsDropdown, title = "Draft", data}: CardProps) {
  const stateContext: StateProps | null = useContext(projectsContext)

  const [detailsOpen, setOpenDetails] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [openStartTimer, setIsOpenStartTimer] = useState<boolean>(false)
  const [colaborators, setColaborators] = useState<ColaboratorProps[]>([])
  const dateFormatCreate = new Date(data!.createdAt);
  const dateFormatUpdate = new Date(data!.updatedAt);
  const timezone = new Date(data!.createdAt).toUTCString().split(' ').at(-1)

  async function tasks() {
    try {
      const tasks: AxiosResponse = await getTasks()
      stateContext?.setTasks(tasks!.data.allTasks)
    } catch(err: any) {
      console.log(err.message)
    }
  }
  async function getAllcolaborators() {
    try {
      const colaborators: AxiosResponse = await getColaborators()
      setColaborators(colaborators!.data)
    } catch(err: any) {
      console.log(err.message)
    }
  }
  async function startClick() {
    await getAllcolaborators()
    setOpenDetails(!detailsOpen)
  }

  const colaboratorFilter = colaborators.find((colaborator: ColaboratorProps) => colaborator.name === data!.colaboratorId)
  const timerProps = {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    taskId: data!.id,
    colaboratorId: colaboratorFilter?.id,
    createdAt: null,
    updatedAt: null,
    deletedAt: new Date(Date.now())
  }
  async function TimeTracker() {
    await getAllcolaborators()
    stateContext?.setIsLoading(true)
    try {
      await createTimer(timerProps)
      stateContext?.setIsLoading(false)
      tasks()
      toast.success('Timer atualizado com sucesso')
    } catch(err: any) {
      toast.error('Dados inválidos')
      stateContext?.setIsLoading(false)
      console.log(timerProps)
    }
  }

  return (
    <div className=" shadow-lg w-full rounded bg-purple-500 p-2">
      <section className="flex w-full justify-between items-center">
        <Text asChild={true} size="sm">
          <div className="flex flex-col justify-center pb-3">
            <h2 className="text-white-50 text-sm2">{title}</h2>
            <p className="text-gray-200 text-xs">Projeto: {data?.projectId}</p>
          </div>
        </Text>
        <Dropdown
          id={data!.id}
          actions={actionsDropdown}
        >
          <FiMoreVertical
            className="cursor-pointer text-white-50 top-3 right-3"
          />
        </Dropdown>
      </section>
      
      <section>
        <Text>
          <div className="flex justify-between items-center">
            <p
              onClick={startClick}
              className="text-xs text-left text-white-50 underline cursor-pointer"
            >
              Detalhes
            </p>
            <section className="flex gap-2">
              <button
                onClick={() => setIsOpenStartTimer(!openStartTimer)}
                className=" bg-white-50 cursor-pointer rounded p-1 text-xs "
                type="button"
              >
                Iniciar timer
              </button>
            </section>
          </div>
        </Text>
      </section>
      <Modal
        key={data?.id}
        title="Detalhes da task"
        closeModal={setOpenDetails}
        isOpen={detailsOpen}
      >
        <div className="p-5 flex flex-col gap-3">
          <h1 className="text-md text-white-50">{data?.name}</h1>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiCheckCircle />
              Projeto: {data?.projectId}
            </p>
          </Text>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiFileText />
              Descrição: {data?.description}
            </p>
          </Text>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiUser />
              Colaborador: {data?.colaboratorId ? data.colaboratorId : 'Não selecionado'}
            </p>
          </Text>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiCalendar />
              Criada: {`${dateFormatCreate.toLocaleDateString()} ${dateFormatCreate.toLocaleTimeString()}`}
            </p>
          </Text>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiCalendar />
              Modificada: {`${dateFormatUpdate.toLocaleDateString()} ${dateFormatUpdate.toLocaleTimeString()}`}
            </p>
          </Text>
          <Text size={'sm'}>
            <p className="text-white-50 flex gap-2 items-center">
              <FiClock />
              Fuso horário: {timezone}
            </p>
          </Text>
          {
            data?.time?.map((timer) => (
              <div className="gap-2 flex flex-col border-b-2 border-gray-900 text-white-50">
                <h1 className="text-white text-md">Tempo de task</h1>
                <p>{`Iniciou: ${new Date(timer.startDate).toLocaleDateString()} ${new Date(timer.startDate).toLocaleTimeString()}`}</p>
                <p>{`Encerrou: ${new Date(timer.endDate).toLocaleDateString()} ${new Date(timer.endDate).toLocaleTimeString()}`}</p>
              </div>
            ))
          }
        </div>
      </Modal>
      <Modal
        key={data!.id + 2}
        title="Timer"
        closeModal={setIsOpenStartTimer}
        isOpen={openStartTimer}
      >
        <div className="p-5">
          <p className="text-white-50">Início</p>
          <Input placeholderName="" onchange={setStartDate} type="datetime-local" />
          <p className="text-white-50">Fim</p>
          <Input placeholderName="" onchange={setEndDate} type="datetime-local" />
          <ButtonSecondary
            execute={TimeTracker}
            sizeFull={true}
            asChild={false}
            disabled={endDate === ''|| startDate === ''}
          >
            {stateContext?.isLoading ? <Loading />: (
              <Text asChild={false} size={'sm'}>
                <span className="flex justify-center items-center gap-2">
                  <FiRefreshCcw />
                  Atualizar
                </span>
              </Text>
            )}
          </ButtonSecondary>
        </div>
      </Modal>
    </div>
  );
};
