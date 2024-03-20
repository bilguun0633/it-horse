export default function InputRadio({ label, name }) {
  return (
    <label className="flex items-center gap-1 cursor-pointer select-none custom-radio">
      <input type="radio" className="hidden" name={name} />
      <div className="w-4 h-4 rounded-full border border-[#4E4B6633] checkmark"></div>
      <span className="text-[#586772]">{label}</span>
    </label>
  );
}
