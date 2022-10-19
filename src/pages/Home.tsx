import { Text } from "../components/Text";
import taskImage from '../assets/tasks.svg';
import { FiLock, FiUser } from "react-icons/fi";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-9 justify-center flex">
        <Text asChild={true} size="lg">
          <h1 className="font-semibold pl-2 border-l-8 border-purple-500">Gerencie suas tasks com apontamento de horas</h1>
        </Text>
      </header>

      <main className="pt-10">
        <section className="p-20 bg-purple-500 flex justify-center">

          <section className="md:w-2/3 flex justify-center">
            <img className="lg:w-60 lg:h-60" src={ taskImage } alt="imagem de duas pessoas em estilo cartoon" />
          </section> 

          <div className="w-full flex justify-center">
            <form className="bg-white-50 lg:w-1/2 rounded shadow-lg w-full p-4">
              <label className="flex text-purple-500 mb-1 items-center gap-2">
                <FiUser className="text-gray-900" />
                Nome
              </label>
              <Input type="text" placeholderName="Digite seu nome" />

              <label className="flex text-purple-500 mb-1 items-center gap-2">
                <FiLock className="text-gray-900" />
                Senha
              </label>
              <Input type="password" placeholderName="Digite sua senha" />

              <Button sizeFull={true} children='Acessar' />
            </form>
          </div>
        </section>
      </main>

      <footer>
        <Text size="xs" asChild>
          <p>© Copyright 2022. IngaCode todos os direitos reservados</p>
        </Text>
      </footer>
    </div>
  );
};
