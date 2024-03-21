import { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "components/Link",
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (args) => (
    <Link
      {...args}
      href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
    >
      Click me
    </Link>
  ),
};
