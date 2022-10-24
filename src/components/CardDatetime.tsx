import clsx from "clsx";
import { FiCalendar } from "react-icons/fi";
import { Text } from "./Text";
import { CardDateTimeProps } from "./types";

export function CardDatetime({date, hour, sizeFull}: CardDateTimeProps) {
  return (
    <section className= {clsx(
      'flex shadow-md bg-white-50 rounded mt-5 justify-between items-center', {
        'w-full': sizeFull === undefined,
        'w-56': sizeFull === false
      }
    )}>
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