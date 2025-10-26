import { Button } from "@/components/ui/button.tsx"
import { APP_CODE, APP_VERSION } from "@/env"


export default function ErrorPage({ message }: {
  message: string
}) {

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
        <div>{APP_CODE}-{APP_VERSION}</div>
      </div>
      <div className="flex w-80 flex-col text-center space-y-6">
        <div>
          <h3 className="text-xl font-bold text-primary">
            Terjadi Kesalahan
          </h3>
          <p className="text-sm text-muted-foreground">
            {message}
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={handleRefresh}>
            Muat Ulang
          </Button>
        </div>
      </div>
    </div>
  )
}
