import { Args } from "@storybook/react";
import Link from "./Link";

export default {
  component: Link,
  title: "components/Link",
};

export const Default = {
  render: (args: Args) => (
    <Link
      {...args}
      href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
    >
      Click me
    </Link>
  ),
};
