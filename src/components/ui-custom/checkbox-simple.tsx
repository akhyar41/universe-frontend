import { cn } from "@/lib/utils"
import React, { InputHTMLAttributes } from "react"

export const CheckboxSimple = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {

    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "size-5 appearance-none rounded border relative border-gray-300 checked:after:content-['✔'] checked:after:text-white checked:after:relative checked:after:left-0.5 bg-white checked:bg-primary checked:border-transparent text-sm",
          className
        )}
        {...props}
      />
    )
  }
)