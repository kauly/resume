import { Args } from "@storybook/react";

import githubIcon from "@/public/icons/github.svg";

import Icon from "./Icon";

export default {
  component: Icon,
  title: "components/Icon",
};

export const Default = {
  render: (args: Args) => <Icon {...args} src={githubIcon} alt="Icon Alt" />,
};
