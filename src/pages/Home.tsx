import { Text } from "../components/Text";
import taskImage from '../assets/tasks.svg';
import { FiLock, FiUser } from "react-icons/fi";
import { Input } from "../components/Input";
import { useState } from "react";
import { Loading } from "../components/Loading";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export interface ResponseApi {
  data: {
    token: string;
  }
}

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userName, setNameUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  console.log(import.meta.env.VITE_PORT)

  function handleSubmit(event: any) {
    setIsLoading(true)
    axios.post(`${import.meta.env.VITE_BASE_URL_API}/user`, {
      userName,
      password
    }, {
      headers: {
        accept: 'aplication/json',
      }
    })
    .then((response: ResponseApi) => {
      setIsLoading(false)
      toast.success('Usuário permitido')
      localStorage.setItem('token', `${response.data.token}`)
      navigate('/tasks')
    })
    .catch((err: AxiosError) => {
      setIsLoading(false)
      toast.error((err.response as any).data.message)
    })
    event.preventDefault()
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="p-9 justify-center flex">
          <Text asChild={true} size="lg">
            <h1 className="font-semibold pl-2 border-l-8 border-purple-500">Gerencie suas tasks com apontamento de horas</h1>
          </Text>
        </header>

        <main className="pt-10"> 
          <section className="md:p-20 p-5 bg-purple-500 md:flex-row flex flex-col gap-12 md:gap-0 justify-center">

            <section className="md:w-2/3 flex justify-center">
              <img className="lg:w-60 w-44 h-44 lg:h-60" src={ taskImage } alt="imagem de duas pessoas em estilo cartoon" />
            </section> 

            <div className="w-full flex justify-center">
              <form className="bg-white-50 lg:w-1/2 rounded shadow-lg w-full p-4">
                <label className="flex text-purple-500 mb-1 items-center gap-2">
                  <FiUser className="text-gray-900" />
                  Nome
                </label>
                <Input onchange={setNameUser} type="text" placeholderName="Digite seu nome" />

                <label className="flex text-purple-500 mb-1 items-center gap-2">
                  <FiLock className="text-gray-900" />
                  Senha
                </label>
                <Input onchange={setPassword} type="password" placeholderName="Digite sua senha" />

                <button className="w-full justify-center disabled:hover:bg-purple-500 disabled:cursor-not-allowed flex bg-purple-500 hover:bg-purple-600 p-2 text-white-50 rounded"
                  onClick={handleSubmit}
                  disabled={isLoading || !userName || !password}
                >
                  {isLoading ? <Loading />: 'Acessar'}
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="h-full p-9 flex justify-center items-end">
          <Text size="xs" asChild>
            <p>© Copyright 2022. IngaCode todos os direitos reservados</p>
          </Text>
        </footer>
      </div>
    </>
    
  );
};
