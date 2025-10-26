import { ErrorBoundary } from "@/context/error-boundary"
import Error404Page from "@/pages/error/error-404-page"
import { FrontPage } from "@/pages/front/front-page"
import { Route, Routes } from "react-router-dom"


export const AppRouter = () => {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="*" element={<Error404Page/>}/>
      </Routes>
    </ErrorBoundary>
  )
}
