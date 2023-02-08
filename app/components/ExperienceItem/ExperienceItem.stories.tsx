import { Meta, StoryObj } from "@storybook/react";

import ExpirenceItem from "./ExperienceItem";

const meta: Meta<typeof ExpirenceItem> = {
  component: ExpirenceItem,
  title: "components/ExpirenceItem",
};

export default meta;

type Story = StoryObj<typeof ExpirenceItem>;

export const Default: Story = {
  render: () => (
    <ExpirenceItem
      company="Galactic Empire"
      companyUrl="https://starwars.fandom.com/wiki/Galactic_Empire"
      date="1990 - 2022"
      position="Backend Developer"
      description="API development, database management, and server maintenance. Java was the main language used."
    />
  ),
};
