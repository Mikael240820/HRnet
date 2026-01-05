import { beforeEach, describe, it, expect, vi } from 'vitest';

// Mock du store
const mockAddEmployee = vi.fn();
vi.mock('../../store/useEmployees', () => ({
  useEmployees: (selector) => selector({ addEmployee: mockAddEmployee }),
}));

import { render, screen, fireEvent } from '@testing-library/react';
import { EmployeeForm } from '../EmployeeForm';

describe('EmployeeForm', () => {
  beforeEach(() => {
    mockAddEmployee.mockClear();
  });

  it('should add employee when form submitted', () => {

    render(<EmployeeForm />);

    // Remplir les champs
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '2000-01-01' } });
    fireEvent.change(screen.getByLabelText(/start date/i), { target: { value: '2026-01-01' } });
    fireEvent.change(screen.getByLabelText(/street/i), { target: { value: '123 Abc abc' } });
    fireEvent.change(screen.getByLabelText(/city/i), { target: { value: 'Abc' } });
    fireEvent.change(screen.getByLabelText(/zip code/i), { target: { value: '12345' } });

    // Sélectionner department
    fireEvent.change(screen.getByLabelText(/department/i), { target: { value: 'Sales' } });

    // Soumettre
    fireEvent.click(screen.getByRole('button', { name: /save employee/i }));

    // Vérifier que addEmployee a été appelé
    expect(mockAddEmployee).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '2000-01-01',
      startDate: '2026-01-01',
      street: '123 Abc abc',
      city: 'Abc',
      state: 'AL',
      zipCode: '12345',
      department: 'Sales',
    });
  });
});
