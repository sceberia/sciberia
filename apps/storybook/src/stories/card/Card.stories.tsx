import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from 'ui'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: 'Какой то такой текст',
};
