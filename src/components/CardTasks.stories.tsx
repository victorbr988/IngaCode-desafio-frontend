import { Meta, StoryObj} from '@storybook/react'
import { FiEdit, FiTrash, FiUser } from 'react-icons/fi'
import { CardProps } from './types'
import { CardTasks } from './CardTasks'

const actionsTask = [
  {id: 1, Icon: FiEdit, name: 'Editar'},
  {id: 2, Icon: FiUser, name: 'Associar colaborador'},
  {id: 3, Icon: FiTrash, name: 'Remover'}
]

const actionsProjects = [
  {id: 1, Icon: FiEdit, name: 'Editar'},
  {id: 3, Icon: FiTrash, name: 'Remover'}
]

export default {
  title: 'Components/Card',
  component: CardTasks,
  args: {
    title: 'Task example',
    actionsDropdown: actionsTask
  }
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const ProjectCard: StoryObj<CardProps> = {
  args: {
    title: 'Project example',
    actionsDropdown: actionsProjects
  }
}