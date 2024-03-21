import { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "components/Heading",
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: (args) => <Heading {...args}>A cool heading</Heading>,
};
