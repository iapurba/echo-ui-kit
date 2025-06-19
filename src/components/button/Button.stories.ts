// Button.stories.jsx

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"], // Enables AutoDocs
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};


