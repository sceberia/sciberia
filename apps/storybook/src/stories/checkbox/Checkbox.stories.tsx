import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from 'ui'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: 'Нажми меня',
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: 'Нажми меня',
  defaultValue: true
};