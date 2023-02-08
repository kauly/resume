import { Meta, StoryObj } from "@storybook/react";

import githubIcon from "@/public/icons/github.svg";

import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "components/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} src={githubIcon} alt="Icon Alt" />,
};
