import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Counter } from '../../components/Counter';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'altPrimary', 'altSecondary'],
    },
    size: {
      control: 'select',
      options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'],
    },
    label: {
      control: 'text',
    },
    pulse: {
      control: 'boolean',
    },
    stroke: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const ExtraSmallPrimary: Story = {
  args: {
    color: 'primary',
    size: 'extraSmall',
    pulse: true,
  },
};

export const ExtraSmallPrimaryWithStroke: Story = {
  args: {
    color: 'primary',
    size: 'extraSmall',
    pulse: false,
    stroke: true,
  },
};

export const ExtraSmallSecondary: Story = {
  args: {
    color: 'secondary',
    size: 'extraSmall',
    pulse: true,
  },
};

export const ExtraSmallSecondaryWithStroke: Story = {
  args: {
    color: 'secondary',
    size: 'extraSmall',
    pulse: true,
    stroke: true,
  },
};

export const SmallPrimary: Story = {
  args: {
    color: 'primary',
    size: 'small',
    pulse: true,
  },
};

export const SmallPrimaryWithStroke: Story = {
  args: {
    color: 'primary',
    size: 'small',
    pulse: false,
    stroke: true,
  },
};

export const SmallSecondary: Story = {
  args: {
    color: 'secondary',
    size: 'small',
    pulse: true,
  },
};

export const SmallSecondaryWithStroke: Story = {
  args: {
    color: 'secondary',
    size: 'small',
    pulse: true,
    stroke: true,
  },
};

export const MediumPrimary: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 55,
  },
};

export const MediumPrimaryWithStroke: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: '20',
    stroke: true,
  },
};

export const MediumSecondary: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    label: 55,
  },
};

export const MediumSecondaryWithStroke: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    label: '20',
    stroke: true,
  },
};

export const LargePrimary: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'text',
  },
};

export const LargePrimaryWithStroke: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'text',
    stroke: true,
  },
};

export const LargeSecondary: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    label: 'text',
  },
};

export const LargeSecondaryWithStroke: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    label: 'text',
    stroke: true,
  },
};

export const ExtraLargePrimary: Story = {
  args: {
    color: 'primary',
    size: 'extraLarge',
    label: 999,
  },
};

export const ExtraLargePrimaryWithStroke: Story = {
  args: {
    color: 'primary',
    size: 'extraLarge',
    label: 999,
    stroke: true,
  },
};

export const ExtraLargeSecondary: Story = {
  args: {
    color: 'secondary',
    size: 'extraLarge',
    label: 999,
  },
};

export const ExtraLargeSecondaryWithStroke: Story = {
  args: {
    color: 'secondary',
    size: 'extraLarge',
    label: 999,
    stroke: true,
  },
};

export const CounterWithLabel: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: '5',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const counterElement = canvas.getByText('5');
    await expect(counterElement).toBeInTheDocument();
  },
};
