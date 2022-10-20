import { FiEdit, FiTrash } from "react-icons/fi";
import { Card } from "../components/Card";
import { DefaultContent } from '../components/DefaultContent';
import { Header } from "../components/Header";
import { Text } from "../components/Text";

export function Projects() {
  const projects: any[] = []

  const actionsMenu = [
    {id: 1, Icon: FiEdit, name: 'Editar'},
    {id: 3, Icon: FiTrash, name: 'Remover'}
  ]

  return (
    <>
      <Header />

      <Text asChild={true}>
        <h1 className="font-semibold text-center p-10">Todos os projetos</h1>
      </Text>
      <main className="lg:px-20 flex flex-wrap gap-4 justify-center">
        {
          projects.length === 0 ? <DefaultContent message='Nenhum projeto encontrado' /> 
          : projects.map(
            (_project) => <Card title="Project example" actionsDropdown={actionsMenu} details={false} />
          )
        }
      </main>
    </>
  )
}