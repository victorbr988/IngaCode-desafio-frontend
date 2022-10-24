import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { getProjects } from "../api/getMethods";
import { createProject } from "../api/postMethods";
import { Button } from "../components/Button";
import { CardProject } from "../components/CardProject";
import { DefaultContent } from '../components/DefaultContent';
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { ModalCreate } from "../components/ModalCreate";
import { Text } from "../components/Text";
import projectsContext, { StateProps } from '../context/ProjectsContext'

export interface ProjectsProps {
  id: string;
  name: string;
}
export function Projects() {
  const stateContext: StateProps | null = useContext(projectsContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const projectAlreadExists = stateContext?.projects.find((project) => project.name === name);

  const actionsMenu = [
    {Icon: FiEdit, name: 'Editar'},
    {Icon: FiTrash, name: 'Remover'}
  ]

  async function projects() {
    try {
      const projects: AxiosResponse = await getProjects()
      stateContext?.setProjects(projects!.data)
    } catch(err: any) {
      toast.error('Não foi possível buscar todos os projetos')
    }
  }

  useEffect(() => {
    projects()
  }, [])

  async function insertproject() {
    stateContext?.setIsLoading(true)
    if( projectAlreadExists ) {
      toast.error('Projeto já existente')
      return stateContext?.setIsLoading(false)
    }
    try{
      await createProject(name)
      stateContext?.setIsLoading(false)
      setIsOpen(false)
      toast.success('Projeto criado com sucesso')
      await projects()
    } catch(err: any) {
      setIsOpen(false)
      toast.error(err.message)
    }
  }

  return (
    <>
      <Header />

      <Text asChild={true}>
        <h1 className="font-semibold text-center p-10">Todos os projetos</h1>
      </Text>

      <section className="relative mx-20 pb-5">
        <Button asChild={false} isOpenModal={isOpen} closeModal={setIsOpen} sizeFull={false}>
          <>
            <FiPlus />
            Adicionar
          </>
        </Button>
        <Modal
          isOpen={isOpen}
          closeModal={setIsOpen}
          title="Adicionar um Projeto"
        >
          <ModalCreate
            key={1}
            isLoading={stateContext?.isLoading}
            create={insertproject}
            updateState={setName}
            disabled={name.length === 0}
          />
        </Modal>
      </section>
      <main className="w-full flex flex-col md:px-20 gap-4 justify-center">
        {
          stateContext?.projects.length === 0 ? <DefaultContent message='Nenhum projeto encontrado' /> 
          : stateContext?.projects.map(
            (project) => < CardProject 
              key={project.id} 
              data={project} 
              title={project.name} 
              actionsDropdown={actionsMenu} 
            />
          )
        }
      </main>
    </>
  )
}