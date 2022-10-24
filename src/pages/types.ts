import { CreateTimerProps } from "../api/types";

export interface TasksProps {
  id: string;
  name: string;
  description: string;
  projectId: string;
  colaboratorId?: string;
  createdAt: string | number
  updatedAt: string
  deletedAt: string
  time?: CreateTimerProps[]
}

export interface ColaboratorProps {
  id: string,
  name: string,
  createdAt: string;
  deletedAt: string;
  updatedAt: string;
}