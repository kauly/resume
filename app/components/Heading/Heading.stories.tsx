import Heading from "./Heading";
import { Args } from "@storybook/react";

export default {
  component: Heading,
  title: "components/Heading",
};

export const Default = {
  render: (args: Args) => <Heading {...args}>A cool heading</Heading>,
};
