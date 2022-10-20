import clsx from "clsx";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { DopdownOptions, Dropdown } from "./Dropdown";
import { Text } from "./Text";

export interface CardProps {
  details: boolean
  actionsDropdown: DopdownOptions[]
  title: string
}

export function Card({details, actionsDropdown, title = "Draft"}: CardProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative w-56 rounded bg-purple-500 p-2">
      <section className="flex justify-between items-center">
        <Text asChild={true} size="sm">
          <h2 className="text-white-50 break-words w-44 text-left">{title}</h2>
        </Text>
        <FiMoreVertical
          onClick={() => setIsOpen(prev => !prev)}
          className="absolute cursor-pointer text-white-50 top-3 right-3"
        />
        <Dropdown actions={actionsDropdown} isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
      
      <section className={clsx('mt-10', {
          'hidden': details === false
      })}>
        <Text>
          <p className="text-xs text-left text-white-50 underline cursor-pointer">Detalhes</p>
        </Text>
      </section>
    </div>
  )
}