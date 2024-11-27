import { Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./lib/useAuth"

import AuthenticationLayout from "@/pages/authentication/layout"
import AuthenticationPage from "@/pages/authentication/index"
import LoginPage from "./pages/authentication/login"
import RegisterPage from "./pages/authentication/register"

import DashboardLayout from "@/pages/dashboard/layout"
import DashboardPage from "@/pages/dashboard/index"
import { ProtectedRoute } from "./components/ProtectedRoute"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route index element={<AuthenticationPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
