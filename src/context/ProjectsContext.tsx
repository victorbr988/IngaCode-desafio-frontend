import { createContext } from "react";
import { ProjectsProps } from "../pages/Projects";
import { TasksProps } from "../pages/types";

export interface StateProps {
  projects: ProjectsProps[];
  setProjects(value: any): void;
  isLoading: boolean;
  setIsLoading(status: boolean): void;
  name: string;
  setName(value: string): void;
  updateProjectName(id: string): ProjectsProps | void;
  deleteProject(id: string): void;
  deleteTask(id: string): void;
  tasks: TasksProps[];
  setTasks(value: any): void;
  filterTasksByNameProject(): void;
  filterTasksByNameColaborator(): void;
  tasksFilter: TasksProps[];
}

const projectsContext: React.Context<StateProps | null> = createContext<StateProps | null>(null)

export default projectsContext;
