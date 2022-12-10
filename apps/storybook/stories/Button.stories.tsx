import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@lucacacciarru/ui';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Solid: ComponentStory<typeof Button> = () => <Button />;
export const Outline: ComponentStory<typeof Button> = () => <Button />;
