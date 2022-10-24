import { CardTimeHistory } from "../components/CardTimeHistory";
import { DefaultContent } from "../components/DefaultContent";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

export function DashBoard() {
  const date = new Date()
  const hourFormat = `${date.getHours()}h${date.getMinutes()}`
  const dateDayFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  const dateMonthFormat =  `${date.getMonth()}/${date.getFullYear()}`

  return (
    <>
      <Header />

      <Text asChild={true}>
        <h1 className="font-semibold text-center p-10">Acompanhamento de horas</h1>
      </Text>

      <main className='flex gap-10 scroll-m-3 max-h-96 flex-wrap justify-center'>
          {/* <CardTimeHistory date={dateDayFormat} hour={hourFormat} title="Horas por dia" />
          <CardTimeHistory date={dateMonthFormat} hour={hourFormat} title="Horas por mês" /> */}
          <DefaultContent message="Ainda em desenvolvimento" />
      </main>
    </>
  )
}