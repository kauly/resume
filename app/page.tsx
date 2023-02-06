import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";

export default function Home() {
  return (
    <main className="flex flex-col h-full bg-white">
      <div className="h-[300px] bg-beige flex justify-center items-center">
        header
      </div>
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <Heading size="small">A cool title</Heading>
        <Heading size="medium">A cool title</Heading>
        <Heading size="large" lined>
          A cool title
        </Heading>
        <Button variant="outlined">Click me</Button>
      </div>
    </main>
  );
}
