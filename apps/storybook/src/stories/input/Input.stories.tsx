import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'ui'

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: "text",
  placeholder: 'Введите данные',
  name: "value",
};
