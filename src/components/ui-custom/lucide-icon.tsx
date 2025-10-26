import * as LucideIcons from "lucide-react"
import { ElementType, forwardRef, SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: string
}

export const LucideIcon = forwardRef<SVGSVGElement, IconProps>(({ icon, ...props }, ref) => {

  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as ElementType

  return <Icon ref={ref} {...props} />
})
