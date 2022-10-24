import axios from "axios";
interface UpdateTasksProps {
  name: string;
  description: string;
  projectId: string;
  colaboratorId: string | undefined;
}

export function updateProject(name: string, id: string) {
  return axios.put(`${import.meta.env.VITE_BASE_URL_API}/project/${id}`, {
    name,
  }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}

export function updateTask(data: UpdateTasksProps, id: string ) {
  return axios.put(`${import.meta.env.VITE_BASE_URL_API}/tasks/${id}`, {
    ...data
  }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}