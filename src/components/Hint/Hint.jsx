import { useState } from "react";
import './Hint.css';

export default function Hint({ hintContent }) {
  const [isHintOpen, setIsHintOpen] = useState(false);

  const toggleHint = () => {
    setIsHintOpen((prev) => !prev);
  }

  return (
    <div className="hint">
      <img src="/img/hint.png" width="35" height="35" alt="Подсказка" onClick={toggleHint}/>
      {isHintOpen && <p className="hintContent">{hintContent}</p>}
    </div>
  )
}
