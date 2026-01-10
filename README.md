# HRnet

Internal web application to manage employee records.

## Features
- Add and list employees
- Notifications: [@mikael240820/modal-toast-tailwind](https://www.npmjs.com/package/@mikael240820/modal-toast-tailwind)
- Mock data: [`src/data/employees.json`](src/data/employees.json)
- Simple table with pagination and filters

## Structure
- `src/components/` UI components (form, table, header)
- `src/data/` Employee mock and data lists (departments, states, etc.)
- `src/store/` State management (Zustand)
- `src/pages/` Main pages (Create, List)
- `src/utils/` Utility functions

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Unit tests
Employee creation: [`src/components/__tests__/EmployeeForm.test.jsx`](src/components/__tests__/EmployeeForm.test.jsx):
```bash
npm run test
```
