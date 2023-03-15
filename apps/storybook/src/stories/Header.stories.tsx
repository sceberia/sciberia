import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from 'ui';

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const UserIsLogin = Template.bind({});
UserIsLogin.args = {
  user: {
    name: 'Test Test',
  },
};

export const UserLoginIn = Template.bind({});
UserLoginIn.args = {};
