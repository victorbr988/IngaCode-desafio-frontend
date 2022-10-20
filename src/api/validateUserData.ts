// import axios, { AxiosError, AxiosResponse } from "axios";
// import { json } from "react-router-dom";

export async function validateUser(userName: string, password:string){
  // const token: Promise<string> = axios.post("https://ingacode-desafio-backend-production.up.railway.app/user", {
  //   userName,
  //   password,
  // }).then(() => {
  //   return token
  // }).catch((error: AxiosError) => {
  //   return (error.response as AxiosResponse).data.message;
  // });

  const bodyInit = {
    userName,
    password
  }

  try{
    const response = await fetch("https://ingacode-desafio-backend-production.up.railway.app/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyInit)
    })
  } catch (error: any) {
    return error.message
  };
};
