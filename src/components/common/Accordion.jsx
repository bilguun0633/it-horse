import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({ title, description }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`rounded-lg border-[#4E4B6633] border transition flex ${
        show ? "bg-[#EDF3FE]" : "bg-white"
      }`}
    >
      <div className="flex-shrink-0 p-4">
        <i
          className={`text-2xl ri-${
            show ? "subtract" : "add"
          }-line transition ${show ? "text-blue" : ""}`}
        ></i>
      </div>
      <div className="flex-1">
        <h2
          className={`p-4 text-lg leading-normal transition uppercase cursor-pointer ${
            show ? "text-blue" : ""
          }`}
          onClick={() => setShow(prev => !prev)}
        >
          {title}
        </h2>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-4 pb-4 text-[#444545]">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
