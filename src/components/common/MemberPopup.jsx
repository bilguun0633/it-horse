import { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { OnClickOutside } from "@/lib/utils/on-click-outside";

import ImageContainer from "./ImageContainer";

export default function MemberPopup({ member, onClose, onClickPrev, onClickNext }) {
  const ref = useRef(null);

  OnClickOutside(ref, onClose, member);
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-brightness-75"
        >
          <motion.div
            ref={ref}
            initial={{ scale: 0.75 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.75 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="max-h-[calc(100svh-2rem)] lg:max-h-[calc(100svh-4rem)] max-w-[1062px] flex flex-col sm:flex-row p-4 lg:p-8 w-full bg-white rounded-lg gap-4 lg:gap-8 relative overflow-auto"
          >
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-4 right-4 hover:bg-base-50">
              <i className="text-3xl ri-close-line" onClick={onClose}></i>
            </div>
            <div className="w-full sm:w-[296px] flex items-center flex-shrink-0 mt-12 sm:mt-0">
              <div className="w-full aspect-square border border-[#4E4B6633] relative bg-slate-100 rounded-full overflow-hidden">
                <ImageContainer src={member.image} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="mb-1 text-xl font-semibold uppercase lg:text-3xl">{member.name}</h4>
              <p className="mb-4 text-lg text-blue lg:mb-16">{member.role}</p>
              <p className="mb-2">{member.position}</p>
              <p className="mb-2">{member.proffesion}</p>
              <p className="mb-4 lg:mb-16">{member.education}</p>
              <div className="w-full h-[1px] bg-[#4E4B6633] mb-4"></div>
              <div className="flex">
                <div className="flex-1">
                  <p className="text-lg uppercase ">phone number - {member.phone}</p>
                  <p className="text-lg uppercase ">email - {member.email}</p>
                </div>
                <div className="flex items-end flex-shrink-0 gap-2">
                  <div
                    onClick={onClickPrev}
                    className="flex items-center justify-center w-12 h-12 text-white rounded cursor-pointer bg-blue"
                  >
                    <i className="text-lg ri-arrow-left-line"></i>
                  </div>
                  <div
                    onClick={onClickNext}
                    className="flex items-center justify-center w-12 h-12 text-white rounded cursor-pointer bg-blue"
                  >
                    <i className="text-lg ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
