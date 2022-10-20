import { NavLink } from 'react-router-dom'
import ingaCodeLogo from '../assets/ingaCode.png'
import { Text } from './Text'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className='bg-white-50 shadow-xl flex justify-between'>
      <section className='flex gap-3 p-1 items-center'>
        <img
          className='md:w-14 md:h-14'
          src={ingaCodeLogo}
          alt='logo da IngaCode'
        />
        <Text children='IngaCode' asChild={false} />
      </section>

      <section className='md:flex gap-4 mr-10 items-center hidden'>
        <NavLink
          to='/dashboard'
          className={clsx('h-full flex items-center', {
            'border-b-4 border-purple-500': pathname === '/dashboard'
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/projects'
          className={clsx('h-full flex items-center', {
            'border-b-4 border-purple-500': pathname === '/projects'
          })}
        >
          Projetos
        </NavLink>
        <NavLink
          to='/tasks'
          className={clsx('h-full flex items-center', {
            'border-b-4 border-purple-500': pathname === '/tasks'
          })}
        >
          Tasks
        </NavLink>
      </section>
    </header>
  );
};
