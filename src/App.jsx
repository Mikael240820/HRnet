import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import CreateEmployee from './pages/CreateEmployee.jsx';
import EmployeeList from './pages/EmployeeList.jsx';

function App() {
  return (
    <div className="min-h-screen bg-leaf-50 text-leaf-900">
      <Router>
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="employees" element={<EmployeeList />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
