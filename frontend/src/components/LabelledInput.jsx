export default function LabelledInput({ label, placeholder, type,onChange }) {
  return (
    <div className="py-2 w-full">
      <div className="text-md pb-1">{label}</div>
      <input
        className="px-2 py-2 w-full rounded-md border border-gray-400"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
