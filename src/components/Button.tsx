import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonActionProps, ButtonProps, ButtonSecondaryProps } from "./types";

export function Button({ isOpenModal, children, sizeFull, closeModal = () => {}, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      onClick={() => closeModal(!isOpenModal)}
      className={
        clsx('bg-purple-500 relative flex justify-center gap-2 items-center rounded text-white-50 hover:bg-purple-600 p-2 text-xs', {
            'w-full': sizeFull === true,
          }
        )
      }
    >
      {children}
    </Comp>
  );
};

export function ButtonSecondary({execute, asChild, sizeFull, children, disabled}: ButtonSecondaryProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      onClick={execute}
      disabled={disabled}
      className={
        clsx('bg-purple-600 hover:scale-105 disabled:transform-none disabled:hover:cursor-not-allowed transition-all relative flex justify-center gap-2 items-center rounded text-white-50 hover:bg-purple-600 p-2 text-xs', {
            'w-full': sizeFull === true,
          }
        )
      }
    >
      {children}
    </Comp>
  );
};

export function ButtonAction({name, Icon, execute = () => {}}: ButtonActionProps) {
  return (
    <button
      onClick={() => execute(name)}
      className='w-full hover:bg-gray-200 p-1'
    >
      <span className={clsx(
        'flex gap-2 w-full p-2 rounded items-center hover:bg-gray-200', {
          'text-red-500': name === 'Remover' || name === 'Remover Task'
        }
      )}>
        <Icon />
        { name }
      </span>
    </button>
  );
};
