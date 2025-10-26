import { APP_DEBUG } from "@/env"
import ErrorPage from "@/pages/error/error-page"
import { Component, ErrorInfo, ReactNode } from "react"


type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {

    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack)
  }

  render() {

    if (
      !APP_DEBUG &&
      this.state.hasError &&
      this.state.error?.message.includes("Failed to fetch dynamically imported module")
    ) {
      window.location.reload()
      return null
    }

    if (this.state.hasError) {
      return <ErrorPage message="Data gagal dimuat, silahkan coba sesaat lagi."/>
    }

    return this.props.children
  }
}
