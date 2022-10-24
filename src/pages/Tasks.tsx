import { FiCheckCircle, FiEdit, FiFilter, FiPlus, FiTrash, FiUser } from "react-icons/fi";
import { Button, ButtonSecondary } from "../components/Button";
import { Header } from "../components/Header";
import { CardTasks } from "../components/CardTasks";
import { Text } from "../components/Text";
import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import projectsContext, { StateProps } from "../context/ProjectsContext";
import { DefaultContent } from "../components/DefaultContent";
import { Loading } from "../components/Loading";
import { createTasks } from "../api/postMethods";
import { getColaborators, getProjects, getTasks } from "../api/getMethods";
import { ColaboratorProps } from "./types";
import { Select } from "../components/Select";

export function Tasks() {
  const stateContext: StateProps | null = useContext(projectsContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [description, setDescription] = useState<string>('')
  const [colaboratorId, setColaboradorId] = useState<string>('Colaborador não selecionado')
  const [projectId, setProjectId] = useState<string>('Projeto não selecionado')
  const [colaborators, setColaborators] = useState<ColaboratorProps[]>([])
  const [projectsId, setProjects] = useState<ColaboratorProps[]>([])
  
  function renderTasks() {
    if (stateContext!.tasksFilter.length === 0) {
      return (
        stateContext!.tasks.map((task) => <CardTasks
          data={task}
          title={task.name}
          actionsDropdown={actionsMenu}
          key={task.id}
        />)
      );
    };
    if (stateContext!.tasksFilter.length > 0) {
      return (
        stateContext!.tasksFilter.map((task) => <CardTasks
          data={task}
          title={task.name}
          actionsDropdown={actionsMenu}
          key={task.id}
        />)
      );
    };
  }

  async function tasks() {
    try {
      const tasks: AxiosResponse = await getTasks()
      stateContext?.setTasks(tasks!.data.allTasks)
    } catch(err: any) {
      toast.error('Não foi possível buscar todas as tasks')
    }
  }
  async function getAllcolaborators() {
    try {
      const colaborators: AxiosResponse = await getColaborators()
      setColaborators(colaborators!.data)
    } catch(err: any) {
      toast.error('Não foi possível buscar todos os colaboradores')
    }
  }
  async function projects() {
    try {
      const projects: AxiosResponse = await getProjects()
      setProjects(projects!.data)
    } catch(err: any) {
      toast.error('Não foi possível buscar todos os projetos')
    }
  }
  useEffect(() => {
    tasks()
    getAllcolaborators()
    projects()
  }, [])

  const actionsMenu = [
    {id: 1, Icon: FiEdit, name: 'Editar Task' },
    {id: 3, Icon: FiTrash, name: 'Remover Task' }
  ]

  const actionsFilter = [
    {id: 2, Icon: FiUser, name: 'Por colaborador' },
    {id: 3, Icon: FiCheckCircle, name: 'Por projeto' }
  ]

  const colaborator = !colaboratorId ? undefined: colaboratorId.trim()

  const tasksProps = {
    name: stateContext!.name.trim(),
    description: description.trim(),
    projectId,
    colaboratorId: colaborator 
  }

  async function createTask() {
    stateContext?.setIsLoading(true)
    if(!colaborator) {
      toast.error('Colaborador não encontrado')
      return stateContext?.setIsLoading(false)
    };
    try{
      await createTasks(tasksProps)
      stateContext?.setIsLoading(false)
      toast.success('Task criada com sucesso')
      setIsOpen(false)
      await tasks()
    } catch(err: any) {
      toast.error(err.message)
    };
  };

  return (
    <>
      <Header />

      <Text asChild={true}>
        <h1 className="font-semibold text-center p-10">Todas as taks do momento</h1>
      </Text>

      <main className="md:px-20 py-8 w-full">
        <section className="flex gap-4 justify-center">
          <section className="relative">
           <Dropdown
              id={'2'}
              key={actionsFilter.length}
              actions={actionsFilter}
           >
            <button 
              className="flex hover:bg-purple-600 justify-center items-center text-sm gap-2 bg-purple-500 p-2 text-white-50 rounded-md"
            >
              <FiFilter />
              Filtrar
            </button>
           </Dropdown>
          </section>
          <Button asChild={false} isOpenModal={isOpen} closeModal={setIsOpen} sizeFull={false}>
            <>
              <FiPlus />
              Adicionar
            </>
          </Button>
        </section>

        <section className="mt-10 w-full flex flex-wrap">
          <div className="flex flex-wrap w-full justify-center gap-8">
            { stateContext?.tasks.length === 0 ?(
              <DefaultContent message="Nenhuma task encontrada" />)
              : renderTasks() 
            }
          </div>
        </section>
      </main>
      <Modal  title="Adicionar uma tarefa" closeModal={setIsOpen} isOpen={isOpen}>
        <div className="p-5 flex flex-col gap-4">
          <Input onchange={stateContext?.setName} placeholderName="Digite um nome" type="text"  />
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className="p-2 w-full rounded h-32 resize-none bg-white-50"
            placeholder="Descreva sua task">
          </textarea>
          <Select
            key={projectId}
            data={projectsId}
            valueSelected={projectId}
            onchange={setProjectId}
          />
           <Select
            key={colaboratorId}
            data={colaborators}
            valueSelected={colaboratorId}
            onchange={setColaboradorId}
          />
          <ButtonSecondary
            execute={createTask}
            sizeFull={true}
            asChild={false}
            disabled={ colaboratorId === '' || projectId === ''}
          >
            {stateContext?.isLoading ? <Loading />: (
              <Text asChild={false} size={'sm'}>
                <span className="flex justify-center items-center gap-2">
                  <FiPlus />
                  Criar
                </span>
              </Text>
            )}
          </ButtonSecondary>
        </div>
      </Modal>
    </>
  );
}
