import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuLink } from 'ui'

export default {
  title: 'Components/MenuLink',
  component: MenuLink,
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args) => <MenuLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Link',
};


export const Arrow = Template.bind({});
Arrow.args = {
  arrow: true,
  label: 'Link',
};