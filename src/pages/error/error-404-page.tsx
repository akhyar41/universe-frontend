import { Button } from "@/components/ui/button.tsx"
import { APP_CODE, APP_VERSION } from "@/env"
import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"


export default function Error404Page() {

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
        <div>{APP_CODE}-{APP_VERSION}</div>
      </div>
      <div className="flex w-80 flex-col text-center space-y-6">
        <div>
          <h3 className="text-xl font-bold text-primary">
            Halaman tidak ditemukan
          </h3>
          <p className="text-sm text-muted-foreground">
            Maaf, halaman yang anda tuju tidak ditemukan.
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <Button asChild
                  variant="outline"
                  className="rounded-full">
            <Link to="/">
              <ArrowLeftIcon/>
              Ke Halaman Utama
              <div></div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
