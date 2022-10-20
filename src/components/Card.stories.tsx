import { Meta, StoryObj} from '@storybook/react'
import { FiEdit, FiTrash, FiUser } from 'react-icons/fi'
import { Card, CardProps } from './Card'

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
  component: Card,
  args: {
    details: true,
    title: 'Task example',
    actionsDropdown: actionsTask
  }
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const ProjectCard: StoryObj<CardProps> = {
  args: {
    details: false,
    title: 'Project example',
    actionsDropdown: actionsProjects
  }
}