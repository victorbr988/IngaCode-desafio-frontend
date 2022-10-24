import { ReactNode } from "react";
import { ProjectsProps } from "../pages/Projects";
import { TasksProps } from "../pages/types";

export interface InputProps {
  onchange?(value: string): void
  placeholderName: string;
  type: string
};

export interface DropdownOptions {
  Icon: any;
  name: string;
  type?: string;
}
export interface ButtonDropdownProps {
  id: string;
  actions: DropdownOptions[];
  children: ReactNode;
}

export interface ModalProps {
  isOpen?: boolean;
  closeModal?(status: boolean): void;
  title: string;
  children: React.ReactNode;
}

export interface ModalCreateProps {
  updateState(value: string): void;
  create():void;
  isLoading?: boolean;
  disabled: boolean;
}

export interface ModalFilterProps {
  updateState(value: string): void;
  fiilter(): void
  disabled: boolean;
}

export interface ModalEditProps {
  id?: string | undefined
  updateState?(value: string): void;
  deleteProject?(id: string | undefined): ProjectsProps | void;
  isLoading?: boolean;
  disabled: boolean;
}

export interface ModalEditProps {
  id?: string | undefined
  updateState?(value: string): void;
  update?(id: string | undefined): ProjectsProps | void;
  isLoading?: boolean;
  disabled: boolean;
};

export interface ModalFilterTasks {
  updateState?(value: string): void;
  disabled: boolean;
  filter():void,
  isLoading: boolean
};

export interface SelectProps {
  data: any[];
  valueSelected: string
  onchange(value: string): void;
};

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'sm2';
  children: ReactNode;
  asChild?: boolean;
}

export interface DefaultContentProps {
  message: string
}

export interface CardTimeProps {
  title: string;
  date: string;
  hour: string;
}

export interface CardProps {
  actionsDropdown: DropdownOptions[];
  title: string;
  data?: TasksProps;
}

export interface CardProjectsProps {
  actionsDropdown: DropdownOptions[];
  title: string;
  data?: ProjectsProps;
}

export interface CardDateTimeProps {
  date: string;
  hour: string;
  sizeFull?: boolean;
}

export interface ButtonProps {
  children: ReactNode | string;
  sizeFull: boolean;
  asChild: boolean;
  closeModal(status: boolean): void;
  isOpenModal?: boolean;
}

export interface ButtonSecondaryProps {
  children: ReactNode | string;
  sizeFull: boolean;
  asChild: boolean;
  execute(): void;
  disabled: boolean
}

export interface ButtonActionProps {
  name: string;
  execute(name: string): void
  Icon: any
  type?: string
}
