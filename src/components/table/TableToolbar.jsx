export function TableToolbar({
  globalFilter,
  onGlobalFilterChange,
  pageSize,
  onPageSizeChange
}) {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <label className="flex flex-col gap-1 text-sm font-medium text-leaf-900">
        <span>Search</span>
        <input
          type="search"
          placeholder="Name, city, department..."
          value={globalFilter}
          onChange={(event) => onGlobalFilterChange(event.target.value)}
          className="w-full rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100"
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-leaf-900">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(event) => onPageSizeChange(event.target.value)}
          className="rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100"
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>entries</span>
      </label>
    </div>
  );
}
