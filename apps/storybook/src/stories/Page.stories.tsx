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

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
