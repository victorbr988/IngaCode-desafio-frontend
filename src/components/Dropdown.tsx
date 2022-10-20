import clsx from 'clsx';
import { IconBaseProps } from 'react-icons/lib';

export interface DopdownOptions {
  id: number;
  Icon: any,
  name: string
}

interface DropdownProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  actions: DopdownOptions[]
}

export function Dropdown({ isOpen, setIsOpen, actions = [] }: DropdownProps) {
  return (
    <div
      className= {clsx('absolute left-60 z-10 mt-36 w-56 origin-top-right rounded-md border border-gray-100 bg-white-50 shadow-lg', {
        'hidden': isOpen === false
      })}
      role="menu"
    >
      <div className="p-2">
        {actions.map(({ id, Icon, name}) =>
          <p key={ id }
            onClick={ () => setIsOpen(!isOpen)}
            className={clsx('flex gap-2 items-center cursor-pointer rounded-lg px-2  py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700',{
              'text-red-500': name === 'Remover'  
            })}
          >
            <Icon  />
            {name}
          </p>)
        }
      </div>
    </div>
  )
}