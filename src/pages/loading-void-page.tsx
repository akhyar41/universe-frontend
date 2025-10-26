import { APP_CODE, APP_VERSION } from "@/env"
import { LoaderCircleIcon } from "lucide-react"


export default function LoadingVoidPage() {

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
        <div>{APP_CODE}-{APP_VERSION}</div>
      </div>
      <div className="animate-spin">
        <LoaderCircleIcon className="text-primary size-12"/>
      </div>
    </div>
  )
}
