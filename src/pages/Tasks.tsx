import { FiEdit, FiFilter, FiMoreVertical, FiPlus, FiTrash, FiUser } from "react-icons/fi";
import { Button } from "../components/Button";
import { DefaultContent } from "../components/DefaultContent";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Text } from "../components/Text";

export function Tasks() {

  const tasks: any[] = []

  const actionsMenu = [
    {id: 1, Icon: FiEdit, name: 'Editar'},
    {id: 2, Icon: FiUser, name: 'Associar colaborador'},
    {id: 3, Icon: FiTrash, name: 'Remover'}
  ]
  return (
    <>
      <Header />

      <Text asChild={true}>
        <h1 className="font-semibold text-center p-10">Todas as taks do momento</h1>
      </Text>

      <main className="md:px-20 w-full">
        <section className="flex gap-4">
          <Button asChild={false} sizeFull={false}>
            <>
              <FiFilter />
              Filtrar
            </>
          </Button>
          <Button asChild={false} sizeFull={false}>
            <>
              <FiPlus />
              Adicionar
            </>
          </Button>
        </section>

        <section className="mt-10 w-full flex flex-wrap justify-center gap-4">
          {
            tasks.length === 0 ? <DefaultContent message="Nenhuma task encontrada" />
            : tasks.map((task) => <Card title="Task example" actionsDropdown={actionsMenu} details={true} key={task.id} />)
          }
        </section>
      </main>
    </>
  )
}