import React from "react";

export default function InputCheckbox({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none custom-checkbox">
      <input type="checkbox" className="hidden" />
      <div className="w-5 h-5 rounded-[2px] border border-[#4E4B6633] checkmark flex justify-center items-center">
        <i className="hidden text-xl text-white ri-check-line"></i>
      </div>
      <span className="text-[#586772]">{label}</span>
    </label>
  );
}
