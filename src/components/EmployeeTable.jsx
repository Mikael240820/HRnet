import { useEmployees } from '../store/useEmployees';

export function EmployeeTable() {
  const employees = useEmployees((state) => state.employees);
  
  return (
    <div className="rounded-lg border border-leaf-200 bg-white p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-leaf-900">Current Employees</h2>
        <div className="flex flex-wrap items-end gap-3">
          <label className="flex flex-col gap-1 text-sm font-medium text-leaf-900">
            <span>Search</span>
            <input
              type="search"
              placeholder="Name, city, department..."
              className="w-full rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100"
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-leaf-900">
            <span>Show</span>
            <select className="rounded-md border border-leaf-200 px-3 py-2 text-base focus:border-leaf-700 focus:outline-none focus:ring-2 focus:ring-leaf-100">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>entries</span>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-leaf-100 text-left text-xs font-semibold uppercase tracking-wide text-leaf-900">
            <tr>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">First Name</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Last Name</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Start Date</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Department</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Date of Birth</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Street</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">City</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">State</span>
              </th>
              <th className="px-4 py-3">
                <span className="text-left uppercase tracking-wide">Zip Code</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-leaf-200">
            {employees.map((employee, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-leaf-50 hover:bg-leaf-100"
              >
                <td className="px-4 py-3 text-leaf-900">{employee.firstName}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.lastName}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.startDate}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.department}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.dateOfBirth}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.street}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.city}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.state}</td>
                <td className="px-4 py-3 text-leaf-900">{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-leaf-900">
        <p>Showing 1 to 10 of 1000 entries</p>
      </div>
    </div>
  )
}
