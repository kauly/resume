import { Meta, StoryObj } from "@storybook/react";

import CopyButton from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  component: CopyButton,
  title: "components/CopyButton",
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: () => (
    <div className="flex space-x-2 items-center text-blue">
      <span id="target">copy me</span>
      <CopyButton targetId="target" />
    </div>
  ),
};
