export function TablePagination({
  pageIndex,
  pageSize,
  filteredTotal,
  total,
  pageCount,
  canPreviousPage,
  canNextPage,
  onPreviousPage,
  onNextPage
}) {
  const startEntry = filteredTotal ? (pageIndex * pageSize + 1) : 0;
  const endEntry = filteredTotal
    ? Math.min((pageIndex + 1) * pageSize, filteredTotal)
    : 0;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-leaf-900">
      <p>
        Showing {startEntry || 0} to {endEntry || 0} of {filteredTotal} entries
        {filteredTotal !== total && (
          <span className="text-leaf-700"> (filtered from {total} total)</span>
        )}
      </p>

      {pageCount > 1 && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPreviousPage}
            disabled={!canPreviousPage}
            className="rounded-md border border-leaf-200 px-3 py-2 text-sm font-semibold text-leaf-900 enabled:hover:bg-leaf-100 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-leaf-700">
            Page {(pageIndex + 1)} of {pageCount}
          </span>
          <button
            type="button"
            onClick={onNextPage}
            disabled={!canNextPage}
            className="rounded-md border border-leaf-200 px-3 py-2 text-sm font-semibold text-leaf-900 enabled:hover:bg-leaf-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
