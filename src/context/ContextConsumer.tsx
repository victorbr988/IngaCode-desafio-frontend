import { AxiosError, AxiosResponse } from "axios";
import { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteData } from "../api/deleteMethods";
import { getProjects, getTasks } from "../api/getMethods";
import { updateProject } from "../api/updateMethods";
import { ProjectsProps } from "../pages/Projects";
import { TasksProps } from "../pages/types";
import projectsContext from './ProjectsContext'
import { ContextAppProps } from "./types";

export function ContextApp({children}: ContextAppProps) {
  const [projects, setProjects]= useState<ProjectsProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [_isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [tasksFilter, setFilter] = useState<TasksProps[]>([])

  const dataState = {
    projects,
    setProjects,
    isLoading,
    setIsLoading,
    name,
    setName,
    updateProjectName,
    deleteProject,
    tasks,
    setTasks,
    filterTasksByNameProject,
    filterTasksByNameColaborator,
    tasksFilter,
    deleteTask
  }

  async function filterTasksByNameProject() {
    setIsLoading(true)
    try{
      const alltasksResponse: AxiosResponse = await getTasks()
      const filterTasks: TasksProps[] = alltasksResponse.data.allTasks.filter((task: TasksProps) => task.projectId === name)
      setFilter(filterTasks)
      setIsLoading(false)
      toast.success('Task filtrada com sucesso')
    } catch(err: any) {
      setIsLoading(false)
      toast.error('Nenhuma task foi encontrada')
    }
  }
  async function filterTasksByNameColaborator() {
    setIsLoading(true)
    try{
      const alltasksResponse: AxiosResponse = await getTasks()
      const filterTasks: TasksProps[] = alltasksResponse.data.allTasks.filter((task: TasksProps) => task.colaboratorId === name)
      if (filterTasks.length === 0) throw new Error('Nenhuma task encontrada')
      setFilter(filterTasks)
      setIsLoading(false)
      toast.success('Task filtrada com sucesso')
    } catch(err: any) {
      setIsLoading(false)
      toast.error('Nenhuma task foi encontrada')
    }
  }

  async function projectsInsert() {
    try {
      const projects: AxiosResponse = await getProjects()
      setProjects(projects!.data)
    } catch(err: any) {
      toast.error('Não foi possível buscar todos os projetos')
    }
  }

  useEffect(() => {
    projectsInsert()
  }, [])

  function updateProjectName(id: string) {
    setIsLoading(true)
    updateProject(name, id)
    .then((response) => {
      setIsLoading(false)
      const allProjects = projects.filter((project) => project.id !== id);
      setProjects([...allProjects, response.data.Project])
      setIsOpenEdit(false)
      projectsInsert()
      toast.success('Projeto editado com sucesso')
    })
    .catch((err: AxiosError) => {
      setIsLoading(false)
      toast.error(err.message)
    })
  }

  async function deleteProject(id: string) {
    setIsLoading(true)
    try {
      await deleteData(id, 'project')
      setIsLoading(false)
      projectsInsert()
      toast.success('Deletado com sucesso')
    } catch(err: any) {
      toast.error(err.message)
    }
  }

  async function tasksRefresh() {
    try {
      const tasks: AxiosResponse = await getTasks()
      setTasks(tasks!.data.allTasks)
    } catch(err: any) {
      toast.error('Não foi possível buscar todas as tasks')
    }
  }
  useEffect(() => {
    tasksRefresh()
    projectsInsert()
  }, [])

  async function deleteTask(id: string) {
    setIsLoading(true)
    try {
      await deleteData(id, 'tasks')
      setIsLoading(false)
      tasksRefresh()
      projectsInsert()
      toast.success('Deletado com sucesso')
    } catch(err: any) {
      toast.error(err.message)
    }
  }

  return (
    <projectsContext.Provider value={dataState}>
      { children }
    </projectsContext.Provider>
  )
}