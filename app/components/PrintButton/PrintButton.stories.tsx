import { Meta, StoryObj } from "@storybook/react";

import PrintButton from "./PrintButton";

const meta: Meta<typeof PrintButton> = {
  title: "components/PrintButton",
  component: PrintButton,
};

export default meta;

type Story = StoryObj<typeof PrintButton>;

export const Default: Story = {
  render: () => <PrintButton />,
};
