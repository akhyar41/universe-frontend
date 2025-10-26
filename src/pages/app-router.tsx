import { ErrorBoundary } from "@/context/error-boundary"
import { LoginPage } from "@/pages/auth/login/login-page"
import { RegistrationPage } from "@/pages/auth/registration/registration-page"
import Error404Page from "@/pages/error/error-404-page"
import { FrontPage } from "@/pages/front/front-page"
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
        <Route path="*" element={<Error404Page/>}/>
      </Routes>
    </ErrorBoundary>
  )
}
