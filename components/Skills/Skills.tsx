type SkillProps = {
  name: string;
};

function Skill({ name }: SkillProps) {
  return (
    <div className="font-semibold text-xl rounded-md bg-beige text-black px-4 py-2 shadow text-center w-fit">
      {name}
    </div>
  );
}

export default Skill;
