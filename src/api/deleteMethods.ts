import axios from "axios";

export function deleteData(id: string, url: string): Promise<void> {
  return axios.delete(`${import.meta.env.VITE_BASE_URL_API}/${url}/${id}`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
}