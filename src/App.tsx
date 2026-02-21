import {Route, Routes} from "react-router-dom"
import LoginPage from "./pages/login"
import DashboardPage from "./pages/dashboard"
import EmployeePage from "./pages/employee"
import EmployeeDetailPage from "./pages/employee-details"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/profile/:id" element={<EmployeeDetailPage />} />
      {/* LOGIN PAGE */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
