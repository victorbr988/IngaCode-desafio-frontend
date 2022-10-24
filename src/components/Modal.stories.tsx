import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalProps } from "./types";


export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: 'Adicionar uma task',
    children: (
      <input type='text' className="p-2 text-gray-900 w-full rounded mt-10" placeholder="Digite um nome" />
    ),
    isOpen: true,
    closeModal: () => {}
  },
  argTypes: {
    children: {
      table: {
        disable: true
      },
    },
  },
} as Meta<ModalProps>

export const Default: StoryObj = {} 
