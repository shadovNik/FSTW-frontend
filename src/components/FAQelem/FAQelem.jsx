import { useState } from "react";
import "./FAQelem.css";

export default function FAQelem({ elemHeader = null, elemContent = null }) {
  const [isFullElemOpen, setIsFullElemOpen] = useState(false);

  const toggleElem = () => {
    setIsFullElemOpen((prev) => !prev);
  }

  return (
    <div className="FAQelem">
      <div className="FAQelem-head" onClick={toggleElem}>
        <p className="FAQelem-headText">{elemHeader}</p>
        <div className="headLine"></div>
      </div>
      {isFullElemOpen && (
        <>
          <div className="elemFullLine"></div>
          <div className="FAQelem-content">{elemContent}</div>
        </>
      )}
    </div>
  );
}
