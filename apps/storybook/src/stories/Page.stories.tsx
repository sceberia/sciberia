import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Main } from 'ui';

export default {
  title: 'Pages/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Page = Template.bind({});
