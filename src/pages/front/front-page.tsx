import { APP_CODE, APP_VERSION } from "@/env"
import { DotIcon, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export function FrontPage() {

  return (
    <div className="overflow-auto w-full h-full">
      <div className="relative">
        <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
          <div>{APP_CODE}-{APP_VERSION}</div>
        </div>
        <div className="min-h-dvh container flex justify-center flex-col items-center">
          <h1 className="text-3xl font-semibold">Mata Kuliah Front-End</h1>
          <div className="h-6"></div>
          <h3 className="text-xl font-semibold">
            Mustofa Akhyar
          </h3>
          <p className="text-xl">1003250005</p>
          <div className="h-4"></div>
          <div className="flex gap-2">
            <a href="https://github.com/akhyar41"
               target="_blank"
               className="flex text-primary">
              Github <ExternalLink className="size-3"/>
            </a>
            <DotIcon className="text-muted-foreground"/>
            <a href="https://github.com/akhyar41/universe-frontend"
               target="_blank"
               className="flex text-primary">
              Tugas <ExternalLink className="size-3"/>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary-foreground">
        <div className="min-h-dvh container py-6">
          <h3 className="text-lg font-semibold mb-2">
            Daftar Tugas
          </h3>
          <ol className="list-decimal px-4 tabular-nums tracking-tight">
            <li className="p-0">
              <Link to="/"
                    className="text-blue-500">
                Landing Page
              </Link>
            </li>
            <li className="p-0">
              Registrasi
              <ul className="px-4 list-disc">
                <li>
                  <Link to="/auth/login"
                        className="text-blue-500">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/auth/registration"
                        className="text-blue-500">
                    Registrasi
                  </Link>
                </li>
              </ul>
            </li>
            <li className="p-0">
              <Link to="/task/31"
                    className="text-blue-500">
                Tugas 3.1
              </Link>
            </li>
            <li className="p-0">
              Tugas 4
              <ul className="px-4 list-disc">
                <li>
                  <Link to="/task/41"
                        className="text-blue-500">
                    4.1
                  </Link>
                </li>
                <li>
                  <Link to="/task/42"
                        className="text-blue-500">
                    4.2
                  </Link>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}