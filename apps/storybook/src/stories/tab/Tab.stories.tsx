import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabLink } from 'ui'

export default {
  title: 'Components/TabLink',
  component: TabLink,
} as ComponentMeta<typeof TabLink>;

const Template: ComponentStory<typeof TabLink> = (args) => <TabLink {...args} />;

export const Active = Template.bind({});
Active.args = {
  disabled: false,
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Label',
};
