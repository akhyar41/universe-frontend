import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"

interface PopoverButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  placeholder? : string
}

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  ({ text, placeholder = "Select option", className, ...props }, ref) => {
    return (
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant="outline"
          className={cn(
            "w-full justify-between whitespace-nowrap text-start text-wrap [&>span]:line-clamp-1",
            className
          )}
          {...props}
        >
          <span>{text || placeholder}</span>
          <ChevronDownIcon className="opacity-50"/>
        </Button>
      </PopoverTrigger>
    )
  }
)
PopoverButton.displayName = "PopoverButton"

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        align === "center" && "min-w-[var(--radix-popover-trigger-width)] max-w-[var(--radix-popover-trigger-width)]",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverButton }
