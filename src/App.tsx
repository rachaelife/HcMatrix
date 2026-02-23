import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login"
import DashboardPage from "./pages/dashboard"
import EmployeePage from "./pages/employee"
import EmployeeDetailPage from "./pages/employee-details"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
      <Route path="/employee" element={
        <ProtectedRoute>
          <EmployeePage />
        </ProtectedRoute>
      } />
      <Route path="/profile/:id" element={
        <ProtectedRoute>
          <EmployeeDetailPage />
        </ProtectedRoute>
      } />
      {/* LOGIN PAGE */}
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
    </Routes>
  )
}

export default App
