export function FormSelect({
  label,
  name,
  value,
  onChange,
  options = []
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
      <span>{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
