import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from 'ui';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => <Card />;
