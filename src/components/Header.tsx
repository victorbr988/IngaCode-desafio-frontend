import { NavLink, useNavigate } from 'react-router-dom'
import ingaCodeLogo from '../assets/ingaCode.png'
import { Text } from './Text'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

export function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <header className='bg-white-50 shadow-xl flex justify-between'>
      <section className='flex gap-3 p-1 items-center'>
        <img
          onClick={() => navigate('/')}
          className='w-14 h-14 cursor-pointer'
          src={ingaCodeLogo}
          alt='logo da IngaCode'
        />
        <Text children='IngaCode' asChild={false} />
      </section>

      <section className='md:hidden p-2 flex items-center'>
        <FiMenu 
          className='text-md cursor-pointer'
          onClick={() => setOpenMenu(!openMenu)}
        />
        {
          openMenu && (
            <section className='gap-4 mr-10 bg-white-50 shadow-lg absolute right-0 top-16 items-center'>
              <NavLink
                to='/dashboard'
                className={clsx('h-full w-full p-3 flex items-center', {
                  'border-b-4 border-purple-500': pathname === '/dashboard'
                })}
              >
                Dashboard
              </NavLink>
              <NavLink
                to='/projects'
                className={clsx('h-full flex  p-3 items-center', {
                  'border-b-4 border-purple-500': pathname === '/projects'
                })}
              >
                Projetos
              </NavLink>
              <NavLink
                to='/tasks'
                className={clsx('h-full flex  p-3 items-center', {
                  'border-b-4 border-purple-500': pathname === '/tasks'
                })}
              >
                Tasks
              </NavLink>
            </section>
          )
        }
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
