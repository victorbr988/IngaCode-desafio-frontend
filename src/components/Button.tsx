import clsx from "clsx";
import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode | string;
  sizeFull: boolean;
  asChild: boolean
  execute?(): any
}

export function Button({ children, sizeFull, execute = () => console.log('okay'), asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  async function executeOtherFuncions(event: any) {
    event.preventDefault()
    await execute()
  }

  return (
    <Comp
      onClick={executeOtherFuncions}
      className={
        clsx('bg-purple-500 flex justify-center gap-2 items-center rounded text-white-50 hover:bg-purple-600 p-2 text-xs', {
            'w-full': sizeFull === true,
          }
        )
      }
    >
      {children}
    </Comp>
  );
};
