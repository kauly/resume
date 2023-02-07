import { Meta, StoryObj } from "@storybook/react";

import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/phone.svg";
import locationIcon from "@/public/icons/location.svg";

import InfoItem from "./InfoItem";

const meta: Meta<typeof InfoItem> = {
  component: InfoItem,
  title: "components/InfoItem",
};

export default meta;
type Story = StoryObj<typeof InfoItem>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <InfoItem title="Email:" value="kauly@hotmail.com" iconUrl={emailIcon} />
      <InfoItem title="Phone:" value="5548984538771" iconUrl={phoneIcon} />
      <InfoItem
        title="Location:"
        value="Brazil - São José, SC"
        iconUrl={locationIcon}
      />
    </div>
  ),
};
