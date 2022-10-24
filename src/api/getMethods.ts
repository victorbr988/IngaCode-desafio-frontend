import axios, { AxiosResponse } from "axios"

export function getProjects(): Promise<AxiosResponse> {
  return axios.get(`${import.meta.env.VITE_BASE_URL_API}/project`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
};

export function getTasks(): Promise<AxiosResponse> {
  return axios.get(`${import.meta.env.VITE_BASE_URL_API}/tasks`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}
export function getColaborators(): Promise<AxiosResponse> {
  return axios.get(`${import.meta.env.VITE_BASE_URL_API}/colaborator`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}
