import axios, { AxiosResponse } from "axios";
import { CreateTimerProps } from "./types";

export function createProject(name: string): Promise<AxiosResponse> {
  return axios.post(`${import.meta.env.VITE_BASE_URL_API}/project`, {
    name
  }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  });
};

interface CreateTaskProps {
  name: string;
  description: string;
  projectId: string;
  colaboratorId: string | undefined
}

export function createTasks({name, description, projectId, colaboratorId}: CreateTaskProps): Promise<AxiosResponse> {
  return axios.post(`${import.meta.env.VITE_BASE_URL_API}/tasks`, {
    name,
    description,
    projectId,
    colaboratorId,
  }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}

export function createTimer({startDate, endDate, taskId, colaboratorId, createdAt, updatedAt, deletedAt}: CreateTimerProps): Promise<AxiosResponse> {
  return axios.post(`${import.meta.env.VITE_BASE_URL_API}/timeTracker`, {
    startDate,
    endDate,
    taskId,
    colaboratorId,
    createdAt,
    updatedAt,
    deletedAt
  }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}
