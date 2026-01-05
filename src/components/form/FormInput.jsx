export function FormInput({
  label,
  name,
  value,
  type = 'text',
  onChange,
  required = true,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  helpText
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-800">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        min={min}
        max={max}
        className="w-full rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100"
      />
      {helpText && <span className="text-xs text-slate-500">{helpText}</span>}
    </label>
  )
}
