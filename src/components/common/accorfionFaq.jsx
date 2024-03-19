import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AccordionFaq({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className="flex items-center gap-4 cursor-pointer lg:gap-8"
        onClick={() => setShow((prev) => !prev)}
      >
        <i
          className={`transitioned text-2xl ri-arrow-right-s-line ${
            show ? "rotate-90" : ""
          }`}
        ></i>
        <h4 className="text-base font-medium lg:text-lg text-primary">
          {question}
        </h4>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex gap-4 pt-3 lg:gap-8">
              <i className="text-2xl opacity-0 ri-arrow-down-s-line"></i>
              <p className="text-xs lg:text-sm text-base-400">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
