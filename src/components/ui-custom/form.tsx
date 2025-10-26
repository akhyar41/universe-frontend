import { cn } from "@/lib/utils"
import * as React from "react"
import { useController } from "react-hook-form"

interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  name: string
}

export const FormError = React.forwardRef<
  HTMLParagraphElement,
  FormErrorProps
>(({ name, className, children, ...props }, ref) => {

  const { fieldState } = useController({ name })
  const body = fieldState.error ? String(fieldState?.error.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
