import { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from '@tanstack/react-table';
import { useEmployees } from '../store/useEmployees';
import { TablePagination } from './table/TablePagination';
import { TableToolbar } from './table/TableToolbar';

export function EmployeeTable() {
  const employees = useEmployees((state) => state.employees);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const columns = useMemo(
    () => [
      { accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'startDate', header: 'Start Date', cell: (info) => (info.getValue() ? new Date(info.getValue()).toLocaleDateString('en-US') : ''), sortingFn: sortingFns.datetime },
      { accessorKey: 'department', header: 'Department', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'dateOfBirth', header: 'Date of Birth', cell: (info) => (info.getValue() ? new Date(info.getValue()).toLocaleDateString('en-US') : ''), sortingFn: sortingFns.datetime },
      { accessorKey: 'street', header: 'Street', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'city', header: 'City', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'state', header: 'State', cell: (info) => info.getValue() || '-' },
      { accessorKey: 'zipCode', header: 'Zip Code', cell: (info) => info.getValue() || '-' },
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    state: { sorting, globalFilter, pagination },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { pageIndex, pageSize } = table.getState().pagination;

  if (!employees.length) {
    return (
      <p className="rounded-lg border border-leaf-200 bg-white p-4 text-leaf-700">
        No employees found.
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-leaf-200 bg-white p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-leaf-900">
          Current Employees
        </h2>
        <TableToolbar
          globalFilter={globalFilter}
          onGlobalFilterChange={(value) => {
            setGlobalFilter(value);
            table.setPageIndex(0);
          }}
          pageSize={pageSize}
          onPageSizeChange={(value) => table.setPageSize(value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-leaf-100 text-left text-xs font-semibold uppercase tracking-wide text-leaf-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3">
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="flex items-center gap-2 text-left uppercase tracking-wide"
                      >
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </span>
                        <span className="text-xs text-leaf-700">
                          {{
                            asc: 'A-Z',
                            desc: 'Z-A',
                          }[header.column.getIsSorted()] ?? 'sort'}
                        </span>
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-leaf-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-white even:bg-leaf-50 hover:bg-leaf-100"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-leaf-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!table.getRowModel().rows.length && (
        <p className="mt-3 text-sm text-leaf-700">
          No results match the current search.
        </p>
      )}

      <TablePagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        filteredTotal={table.getFilteredRowModel().rows.length}
        total={employees.length}
        pageCount={table.getPageCount()}
        canPreviousPage={table.getCanPreviousPage()}
        canNextPage={table.getCanNextPage()}
        onPreviousPage={() => table.previousPage()}
        onNextPage={() => table.nextPage()}
      />
    </div>
  );
}
