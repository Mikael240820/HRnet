import { EmployeeTable } from '../components/EmployeeTable'

function EmployeeList() {
  return (
    <section className="flex flex-col gap-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-leaf-900">Employees</h1>
        <p className="text-leaf-700">Browse the list of saved employees.</p>
      </header>
      <EmployeeTable />
    </section>
  )
}

export default EmployeeList
