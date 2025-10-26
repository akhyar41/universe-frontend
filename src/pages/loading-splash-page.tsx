import { APP_CODE, APP_NAME, APP_VERSION } from "@/env"
import { LoaderCircleIcon } from "lucide-react"


export default function LoadingSplashPage() {

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
        <div>{APP_CODE}-{APP_VERSION}</div>
      </div>
      <img src="/assets/logo.png"
           className="size-24"
           alt="logo"/>
      <div className="w-40 text-center font-semibold leading-none text-muted-foreground">
        {APP_NAME}
      </div>
      <div className="h-4"></div>
      <LoaderCircleIcon className="size-12 text-primary"/>
    </div>
  )
}
