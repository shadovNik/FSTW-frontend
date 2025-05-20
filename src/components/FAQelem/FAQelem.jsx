import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "./FAQelem.css";

export default function FAQelem({ elemHeader = null, elemContent = null }) {
  const [isFullElemOpen, setIsFullElemOpen] = useState(false);

  const toggleElem = () => {
    setIsFullElemOpen((prev) => !prev);
  };

  return (
    <div className="FAQelem">
      <div className="FAQelem-head" onClick={toggleElem}>
        <p className="FAQelem-headText">{elemHeader}</p>
        <div className="headLine"></div>
      </div>
      <AnimatePresence>
        {isFullElemOpen && (
          <>
            <div className="elemFullLine"></div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="FAQelem-content">{elemContent}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
