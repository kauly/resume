import ExpirenceItem from "./ExperienceItem";

export default {
  component: ExpirenceItem,
  title: "components/ExpirenceItem",
};

export const Default = {
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
