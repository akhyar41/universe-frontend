import { cn } from "@/lib/utils"
import { LoaderCircleIcon } from "lucide-react"

export const Loading = ({ show, className }: {
  show: boolean,
  className?: string | null,
}) => {

  if (!show) {
    return null
  }

  return (
    <div className={cn(
      "absolute start-0 top-0 flex h-full w-full items-center justify-center rounded-lg bg-background/80 z-[inherit]",
      className
    )}>
      <div>
        <LoaderCircleIcon className="animate-spin size-10"/>
      </div>
    </div>
  )
}
