import { Menu, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { ButtonAction, ButtonSecondary } from './Button';
import { Modal } from './Modal';
import { ModalEditProject, ModalFilterTask } from './ModalEdit';
import projectsContext, { StateProps } from '../context/ProjectsContext';
import { ModalDeleteProject } from './ModalDelete';
import { Input } from './Input';
import { Select } from './Select';
import { FiRefreshCcw } from 'react-icons/fi';
import { Text } from './Text';
import { Loading } from './Loading';
import { ColaboratorProps } from '../pages/types';
import { ProjectsProps } from '../pages/Projects';
import { updateTask } from '../api/updateMethods';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { getColaborators, getProjects, getTasks } from '../api/getMethods';
import { ButtonDropdownProps } from './types';

export function Dropdown({ actions, children, id }: ButtonDropdownProps) {
  const stateContext: StateProps | null = useContext(projectsContext);
  const [action, setAction] = useState<string>('');
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false)
  const [isOpenEditTask, setIsOpenEditTask] = useState<boolean>(false)
  const [isOpenFilterProject, setIsOpenFilterProject] = useState<boolean>(false)
  const [isOpenFilterColaborator, setIsOpenFilterColaborator] = useState<boolean>(false)
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)
  const [isOpenDeleteTask, setIsOpenDeleteTask] = useState<boolean>(false)
  const [description, setDescription] = useState<string>('')
  const [projectsId, setProjects] = useState<ProjectsProps[]>([])
  const [projectId, setProjectId] = useState<string>('Não selecionado')
  const [colaborators, setColaborators] = useState<ColaboratorProps[]>([])
  const [colaboratorId, setColaboradorId] = useState<string>('Não selecionado')

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

  function managerActions(name: string): void {
    setAction(name);
    switch (action) {
      case 'Editar':
        setIsOpenEdit(!isOpenEdit);
        break;
      case 'Editar Task':
        getAllcolaborators()
        projects()
        setIsOpenEditTask(!isOpenEditTask);
        break;
      case 'Por colaborador':
        setIsOpenFilterColaborator(!isOpenFilterColaborator);
        break;
      case 'Por projeto':
        setIsOpenFilterProject(!isOpenFilterProject);
        break;
      case 'Remover':
        setIsOpenDelete(!isOpenDelete)
        break;
      case 'Remover Task':
        setIsOpenDeleteTask(!isOpenDeleteTask)
      default:
        () => {};
    }
  }

  const colaborator = !colaboratorId ? undefined: colaboratorId.trim()

  const tasksProps = {
    name: stateContext!.name.trim(),
    description: description.trim(),
    projectId,
    colaboratorId: colaborator 
  }

  async function tasksRefresh() {
    try {
      const tasks: AxiosResponse = await getTasks()
      stateContext?.setTasks(tasks!.data.allTasks)
    } catch(err: any) {
      toast.error('Não foi possível buscar todas as tasks')
    }
  }

  function updateTaskSelected() {
    stateContext?.setIsLoading(true)
    updateTask(tasksProps, id)
    .then((response) => {
      console.log(response.data)
      stateContext?.setIsLoading(false)
      const allTasks = stateContext!.tasks.filter((task) => task.id !== id);
      stateContext?.setTasks([...allTasks, response.data.task])
      setIsOpenEdit(false)
      tasksRefresh()
      toast.success('Task editada com sucesso')
    })
    .catch((err: AxiosError) => {
      stateContext?.setIsLoading(false)
      toast.error(err.message)
    })
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 bg-white-50">
              {actions.map(({ name, Icon }) => (
                <Menu.Item>
                  {() => <ButtonAction name={name} Icon={Icon} execute={managerActions} />}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Modal
        isOpen={isOpenEdit}
        closeModal={setIsOpenEdit}
        title={action}
      >
        <ModalEditProject
          updateState={stateContext?.setName}
          disabled={action.length === 0}
          id={id}
          update={stateContext?.updateProjectName}
          isLoading={stateContext?.isLoading}
        />
      </Modal>
      <Modal
        isOpen={isOpenDelete}
        closeModal={setIsOpenDelete}
        title={action}
      >
        <ModalDeleteProject
          disabled={action.length === 0}
          id={id}
          deleteProject={stateContext?.deleteProject}
          isLoading={stateContext?.isLoading}
        />
      </Modal>
      <Modal
        isOpen={isOpenFilterProject}
        closeModal={setIsOpenFilterProject}
        title={`filtrar ${action}`}
      >
        <ModalFilterTask
          disabled={action.length === 0}
          isLoading={stateContext!.isLoading}
          filter={stateContext!.filterTasksByNameProject}
          updateState={stateContext!.setName}
        />
      </Modal>
      <Modal
        isOpen={isOpenFilterColaborator}
        closeModal={setIsOpenFilterColaborator}
        title={`filtrar ${action}`}
      >
        <ModalFilterTask
          disabled={action.length === 0}
          isLoading={stateContext!.isLoading}
          filter={stateContext!.filterTasksByNameColaborator}
          updateState={stateContext!.setName}
        />
      </Modal>
      <Modal
        isOpen={isOpenDeleteTask}
        closeModal={setIsOpenDeleteTask}
        title={action}
      >
        <ModalDeleteProject
          disabled={action.length === 0}
          id={id}
          deleteProject={stateContext?.deleteTask}
          isLoading={stateContext?.isLoading}
        />
      </Modal>
      <Modal
        isOpen={isOpenEditTask}
        closeModal={setIsOpenEditTask}
        title={action}
      >
        <div className="p-5 flex flex-col gap-4">
          <Input onchange={stateContext?.setName} placeholderName="Digite um nome" type="text"  />
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className="p-2 w-full rounded h-32 resize-none bg-white-50"
            placeholder="Descreva sua task">
          </textarea>
          <Select
            key={id + 1}
            data={projectsId}
            valueSelected={projectId}
            onchange={setProjectId}
          />
           <Select
            key={id + 2}
            data={colaborators}
            valueSelected={colaboratorId}
            onchange={setColaboradorId}
          />
          <ButtonSecondary
            execute={updateTaskSelected}
            sizeFull={true}
            asChild={false}
            disabled={ projectId === "Não selecionado" }
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
}
