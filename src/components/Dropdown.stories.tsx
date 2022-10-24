import { Meta, StoryObj } from '@storybook/react';
import { FiCheckCircle, FiEdit, FiFilter, FiMoreVertical, FiTrash, FiUser } from 'react-icons/fi';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Dropdown } from './Dropdown';
import { ButtonDropdownProps } from './types';


const actionsMenu = [
  {id: 1, Icon: FiEdit, name: 'Editar'},
  {id: 3, Icon: FiTrash, name: 'Remover'}
]

const actionsFilter = [
  {id: 2, Icon: FiUser, name: 'Por colaborador'},
  {id: 3, Icon: FiCheckCircle, name: 'Por task'}
]

export default {
  title: 'Components/dropdown',
  component: Dropdown,
  decorators: [withRouter],
  args: {
    actions: actionsMenu,
    children:(
      <div className='p-2 bg-purple-600 rounded'>
        <FiMoreVertical
          className="cursor-pointer text-sm text-white-50 top-3 right-3"
        />
      </div>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonDropdownProps>;

export const Default: StoryObj = {};

export const ButtonFilter: StoryObj = {
  args: {
    actions: actionsFilter,
    children:(
      <button className="flex hover:bg-purple-600 justify-center items-center text-sm gap-2 bg-purple-500 p-2 text-white-50 rounded-md">
        <FiFilter />
        Filtrar
      </button>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
