import notFound from '../assets/notFound.svg'
import { Text } from './Text'

interface DefaultContentProps {
  message: string
}

export function DefaultContent({ message }: DefaultContentProps) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <img className='lg:w-44 lg:h-44' src={notFound} alt="imagem representando algo que não foi encontrado" />
      <Text children={ message } />
    </div>
  )
}