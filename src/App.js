import { useState } from "react";
import { FloatingHearts } from "./components/FloatingHearts";
import { Envelope } from "./components/Envelope";
import { LoveLetter } from "./components/LoveLetter";

export default function ValentinesCard() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200 relative overflow-hidden">
      <FloatingHearts />
      <Envelope opened={opened} onOpen={() => setOpened(true)} />
      <LoveLetter opened={opened} />
    </div>
  );
}
