import { Toaster } from "@/components/ui/sonner"
import { AppRouter } from "@/pages/app-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "@/lib/global"

import "@/main.css"
import "sonner/dist/styles.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
      gcTime: 0,
    }
  }
})

createRoot(document.getElementsByTagName("body")[0]).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    <Toaster position="top-center" theme="light" richColors/>
  </QueryClientProvider>
)
