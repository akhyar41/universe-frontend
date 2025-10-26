import { useEffect } from "react"
import { toast } from "sonner"

export const ErrorToast = ({ isError, error, setOpen = undefined }: {
  isError: boolean,
  error: Error | null,
  setOpen?: (open: boolean) => void | undefined,
}) => {

  useEffect(() => {
    if (!isError || !error) return
    console.log(error)
    toast.error("Terjadi kesalahan", { description: error.message })
    setOpen?.(false)
  }, [isError, error])

  return null
}
