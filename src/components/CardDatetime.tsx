import { FiCalendar } from "react-icons/fi";
import { Text } from "./Text";

interface CardDateTimeProps {
  date: string;
  hour: string
}

export function CardDatetime({date, hour}: CardDateTimeProps) {
  return (
    <section className="w-full flex bg-white-50 rounded mt-5 justify-between items-center">
      <div className="flex gap-1 items-center px-3">
        <FiCalendar />
        <Text asChild={true} size='xs'>
          <p className="p-2 font-bold">{ date }</p>
        </Text>
      </div>
    
      <Text asChild={true} size='xs'>
        <p className="px-3 ">{ hour }</p>
      </Text>
    </section>
  )
}