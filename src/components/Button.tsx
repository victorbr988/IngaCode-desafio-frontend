import clsx from "clsx";
import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode | string;
  sizeFull: boolean;
  execute?(): void
}

export function Button({ children, sizeFull, execute = () => {} }: ButtonProps) {
  return (
    <button
      onClick={() => execute()}
      className={
        clsx('bg-purple-500 flex justify-center gap-2 items-center rounded text-white-50 hover:bg-purple-600 p-2 text-xs', {
            'w-full': sizeFull === true,
          }
        )
      }
    >
      {children}
    </button>
  );
};
