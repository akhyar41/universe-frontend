import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ErrorBox({ className, onClick }: {
  className?: string,
  onClick?: () => void
}) {

  return (
    <div className={
      cn(
        "flex h-full w-full items-center justify-center",
        className
      )}>
      <div className="flex w-60 flex-col text-center space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Terjadi kesalahan, Silahkan coba sesaat lagi
          </p>
        </div>
        <div>
          <Button
            variant="outline"
            className="h-8 rounded-full"
            onClick={onClick}>
            Muat Ulang
          </Button>
        </div>
      </div>
    </div>
  )
}
