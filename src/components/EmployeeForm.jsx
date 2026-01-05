import { useState } from 'react';
import { departments } from '../data/departments';
import { states } from '../data/states';
import { useEmployees } from '../store/useEmployees';
import { FormInput } from './form/FormInput';
import { FormSelect } from './form/FormSelect';
import { ModalToast as Toast } from '@mikael240820/modal-toast-tailwind';

const defaultFormValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: states[0].abbreviation,
  zipCode: '',
  department: departments[0],
};

export function EmployeeForm() {
  const addEmployee = useEmployees((state) => state.addEmployee);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [toastOpen, setToastOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee(formValues);
    setFormValues(defaultFormValues);
    setToastOpen(true);
  };

  return (
    <>
      <form
        className="rounded-lg border border-leaf-200 bg-white p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 space-y-1">
          <h2 className="text-lg font-semibold">Create Employee</h2>
          <p className="text-sm text-leaf-700">
            Enter the employee informations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput
            label="First name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            minLength={3}
            helpText="Au moins 3 caractères"
          />

          <FormInput
            label="Last name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            minLength={3}
            helpText="Au moins 3 caractères"
          />

          <FormInput
            label="Date of birth"
            name="dateOfBirth"
            type="date"
            value={formValues.dateOfBirth}
            onChange={handleChange}
            max={`${new Date().getFullYear() - 16}-01-01`}
            helpText="Doit avoir au moins 16 ans"
          />

          <FormInput
            label="Start date"
            name="startDate"
            type="date"
            value={formValues.startDate}
            onChange={handleChange}
          />
        </div>

        <fieldset className="my-5 rounded-lg border border-leaf-200 p-4">
          <legend>Address</legend>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <FormInput
              label="Street"
              name="street"
              value={formValues.street}
              onChange={handleChange}
            />

            <FormInput
              label="City"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />

            <FormSelect
              label="State"
              name="state"
              value={formValues.state}
              onChange={handleChange}
              options={states.map((state) => ({
                value: state.abbreviation,
                label: state.name,
              }))}
            />

            <FormInput
              label="Zip code"
              name="zipCode"
              value={formValues.zipCode}
              onChange={handleChange}
              pattern="[0-9]{5}(-[0-9]{4})?"
              helpText="Format : 12345 ou 12345-6789"
            />
          </div>
        </fieldset>

        <FormSelect
          label="Department"
          name="department"
          value={formValues.department}
          onChange={handleChange}
          options={departments.map((department) => ({
            value: department,
            label: department,
          }))}
        />

        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-leaf-700 px-4 py-2 text-sm font-semibold text-white"
          >
            Save employee
          </button>
        </div>
      </form>

      <Toast
        title="Employee created"
        description="The employee is aded to the list."
        open={toastOpen}
        onClose={() => setToastOpen(false)}
      />
    </>
  )
}
