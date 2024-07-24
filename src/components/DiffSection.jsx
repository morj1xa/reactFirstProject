import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function DiffSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    console.log("button clicked", type);
    setContentType(type);
  }
  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      <Button
        isActive={contentType == "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType == "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType == "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {!contentType && <p>Нажмите на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
