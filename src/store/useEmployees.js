import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useEmployees = create(
  persist(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({
          employees: [...state.employees, employee],
        })),
    }),
    {
      name: 'employees',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
