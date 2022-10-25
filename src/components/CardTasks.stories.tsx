import { Meta, StoryObj} from '@storybook/react'
import { FiEdit, FiTrash, FiUser } from 'react-icons/fi'
import { CardTasks } from './CardTasks'
import { CardProps } from './types'

const actionsDropdown = [
  {id: 1, Icon: FiEdit, name: 'Editar'},
  {id: 3, Icon: FiTrash, name: 'Remover'}
]
const taskMock = {
  id: "7ce3e1ee-fb98-4e32-ba3d-2dfe365da349",
  name: "teste example",
  description: "aqui é uma task",
  projectId: "nova era",
  colaboratorId: 'gabriel',
  createdAt: "2022-10-23T17:05:48.068Z",
  updatedAt: "2022-10-23T17:05:48.068Z",
  deletedAt: "2022-10-28T17:05:48.068Z",
  time: []
}

export default {
  title: 'Components/CardTask',
  component: CardTasks,
  args: {
    actionsDropdown: actionsDropdown,
    title: 'Task example',
    data: taskMock
  }
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const ProjectCard: StoryObj<CardProps> = {
  args: {
    actionsDropdown,
    title: 'Task example',
    data: taskMock
  }
}