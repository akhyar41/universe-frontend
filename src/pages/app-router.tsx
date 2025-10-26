import { ErrorBoundary } from "@/context/error-boundary"
import { LoginPage } from "@/pages/auth/login/login-page"
import { RegistrationPage } from "@/pages/auth/registration/registration-page"
import Error404Page from "@/pages/error/error-404-page"
import { FrontPage } from "@/pages/front/front-page"
import { Task31Page } from "@/pages/task-3/task-31-page"
import { Task41Page } from "@/pages/task-4/task-41-page"
import { Task42Page } from "@/pages/task-4/task-42-page"
import { Route, Routes } from "react-router-dom"


export const AppRouter = () => {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="auth">
          <Route path="login" element={<LoginPage/>}/>
          <Route path="registration" element={<RegistrationPage/>}/>
        </Route>
        <Route path="task">
          <Route path="31" element={<Task31Page/>}/>
          <Route path="41" element={<Task41Page/>}/>
          <Route path="42" element={<Task42Page/>}/>
        </Route>
        <Route path="*" element={<Error404Page/>}/>
      </Routes>
    </ErrorBoundary>
  )
}
