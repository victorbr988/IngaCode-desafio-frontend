import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { FiFilter } from 'react-icons/fi'
import { ButtonProps } from "./types";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Acessar',
    sizeFull: false
  },
} as Meta<ButtonProps>

export const Default: StoryObj = {};

export const ButtonWithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <FiFilter />
        Filtrar
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
