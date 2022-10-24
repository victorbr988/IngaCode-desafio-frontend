import { Meta, StoryObj } from '@storybook/react';
import { CardDatetime } from './CardDatetime';
import { CardDateTimeProps } from './types';

const date = new Date()
const hourFormat = `${date.getHours()}h${date.getMinutes()}`
const dateDayFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
const dateMonthFormat =  `${date.getMonth()}/${date.getFullYear()}`

export default {
  title: 'Components/CardDatetime',
  component: CardDatetime,
  args: {
    date: dateDayFormat,
    hour: hourFormat,
    sizeFull: false,
  }
} as Meta<CardDateTimeProps>

export const Default: StoryObj<CardDateTimeProps> = {}

export const DateMonthTime: StoryObj<CardDateTimeProps> = {
  args: {
    date: dateMonthFormat,
    hour: hourFormat,
    sizeFull: false
  }
}
