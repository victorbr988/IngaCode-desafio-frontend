import { FiCalendar } from "react-icons/fi";
import { CardDatetime } from "./CardDatetime";
import { Text } from "./Text";
import { CardTimeProps } from "./types";

export function CardTimeHistory({ title, date, hour }: CardTimeProps) {
  return (
    <>
      <main className="bg-purple-500 overflow-y-scroll h-96 font-semibold rounded-lg lg:w-80 w-full p-3">
        <Text asChild={true}>
          <h2 className="text-center text-white-50">{ title }</h2>
        </Text>

        <CardDatetime date={date} hour={hour} />
      </main>
    </>
  )
}