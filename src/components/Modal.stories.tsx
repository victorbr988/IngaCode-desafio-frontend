import { Meta, StoryObj } from "@storybook/react";
import { FiPlus, FiRefreshCcw } from "react-icons/fi";
import { ButtonSecondary } from "./Button";
import { Input } from "./Input";
import { Modal } from "./Modal";
import { ModalDeleteProject } from "./ModalDelete";
import { ModalFilterTask } from "./ModalEdit";
import { Text } from "./Text";
import { ModalProps } from "./types";


export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: 'Adicionar uma task',
    children: (
      <div className="p-5">
        <Input type='text' placeholderName="Digite um nome" />
        <ButtonSecondary 
          asChild={false}
          execute={() => {}}
          disabled={false}
          sizeFull={true}
        >
          <>
            <FiPlus />
            Criar
          </>
        </ButtonSecondary>
      </div>
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
    isOpen: {
      table:{
        disable: true
      }
    }
  },
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {} 
export const ModalAddTimer: StoryObj<ModalProps> = {
  args: {
    title: 'Adicionar Timer',
    children: (
      <div className="p-5">
        <p className="text-white-50">Início</p>
        <Input placeholderName="" onchange={() => {}} type="datetime-local" />
        <p className="text-white-50">Fim</p>
        <Input placeholderName="" onchange={() => {}} type="datetime-local" />
        <ButtonSecondary
          execute={() => {}}
          sizeFull={true}
          asChild={false}
          disabled={false}
        >
          <Text asChild={false} size={'sm'}>
            <span className="flex justify-center items-center gap-2">
              <FiRefreshCcw />
              Atualizar
            </span>
          </Text>
        </ButtonSecondary>
      </div>
    )
  }
} 

export const ModalFilterTasksByColaborator: StoryObj<ModalProps> = {
  args: {
    title: 'Por colaborador',
    children: (
      <ModalFilterTask 
        disabled={false}
        filter={() => {}}
        isLoading={false}
        updateState={() => {}}
      />
    )
  }
} 

export const ModalFilterTaskByProject: StoryObj<ModalProps> = {
  args: {
    title: 'Por Projeto',
    children: (
      <ModalFilterTask 
        disabled={false}
        filter={() => {}}
        isLoading={false}
      />
    )
  }
}

export const ModalDeleteTask: StoryObj<ModalProps> = {
  args: {
    title: 'Deletar task',
    children: (
      <ModalDeleteProject
        disabled={false}
        id="ajkh8yd98sh8q9392n309u9023n0923u902n0"
      />
    )
  }
} 

export const ModalDeleteProjects: StoryObj<ModalProps> = {
  args: {
    title: 'Deletar Projeto',
    children: (
      <ModalDeleteProject
        disabled={false}
        id="BVIUYiphahJB8u9023n0923u902n0BUYISILUJ"
      />
    )
  }
} 
