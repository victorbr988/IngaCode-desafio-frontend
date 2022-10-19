import { ReactNode } from "react"

export interface InputProps {
  onchange?(value: string): void
  placeholderName: string;
  type: string
};

export function Input({ onchange= () => {}, placeholderName, type }: InputProps) {
  return(
    <input
      type={type}
      className=' p-2 rounded w-full mb-5 placeholder:text-gray-100 text-gray-900 border-2 border-gray-100'
      placeholder={ placeholderName }
      onChange={ (event: React.ChangeEvent<HTMLInputElement>) => onchange(event.target.value)}
    />
  ); 
};
