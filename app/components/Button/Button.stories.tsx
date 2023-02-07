import { Args, Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import Button from "./Button";
import linkedin from "@/public/icons/linkedin.svg";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: Args) => <Button {...args}>Click me</Button>,
};

export const WithIconLeft: Story = {
  args: {
    variant: "outlined",
    children: "Click me",
    iconLeft: (
      <Image src={linkedin} width={24} height={24} alt="Linkedin Icon" />
    ),
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "filled",
    children: "Click me",
    iconRight: (
      <Image src={linkedin} width={24} height={24} alt="Linkedin Icon" />
    ),
  },
};
