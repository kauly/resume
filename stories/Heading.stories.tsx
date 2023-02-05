import Heading from "@/app/components/heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const Small = () => (
  <Heading size="small" lined={true}>
    A cool title
  </Heading>
);
export const Medium = () => (
  <Heading size="medium" lined={true}>
    A cool title
  </Heading>
);
export const Large = () => (
  <Heading size="large" lined={true}>
    A cool title
  </Heading>
);
