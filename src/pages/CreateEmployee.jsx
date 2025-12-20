import { EmployeeForm } from '../components/EmployeeForm';

function CreateEmployee() {
  return (
    <section className="flex flex-col gap-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-leaf-900">New employee</h1>
        <p className="text-leaf-700">Complete the form for add employee.</p>
      </header>
      <EmployeeForm />
    </section>
  )
}

export default CreateEmployee
