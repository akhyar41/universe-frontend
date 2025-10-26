import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { APP_CODE, APP_VERSION } from "@/env"
import { sleep } from "@/lib/sleep"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { LoaderCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod/v4"


const FormSchema = z.object({
  email: z
    .email({ message: "Email tidak valid" })
    .min(6, { message: "Kurang dari 6 karakter" })
    .default(""),
  password: z
    .string()
    .min(6, { message: "Kurang dari 6 karakter" })
    .default(""),
})
type FormData = z.infer<typeof FormSchema>
const FormEmpty = FormSchema.parse({})

export function LoginPage() {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: FormEmpty
  })

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {

      await sleep(2000)

      console.log(data)
      toast.info("Berhasil Login", {
        description: "Dalam pengembangan"
      })

    },
    onError: (error: Error) => {
      toast.error("Terjadi kesalahan", {
        description: error.message
      })
    }
  })

  const formHandle = (data: FormData) => {
    mutate(data)
  }


  return (
    <div className="overflow-auto w-full h-full">
      <div className="relative">
        <div className="absolute top-4 text-end font-mono text-xs font-light text-gray-800 end-4">
          <div>{APP_CODE}-{APP_VERSION}</div>
        </div>
        <div className="min-h-dvh flex justify-center items-center">
          <Form {...form}>
            <form action="#"
                  onSubmit={form.handleSubmit(formHandle)}
                  autoComplete="off">
              <Card className="shadow-none border-0 md:border w-[340px]">
                <CardHeader>
                  <CardTitle>Login Aplikasi</CardTitle>
                  <CardDescription className="leading-none">
                    Silahkan isi form berikut untuk login aplikasi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="text"
                                   autoCapitalize="off"
                                   {...field} />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password"
                                   autoCapitalize="off"
                                   {...field} />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <Separator/>
                    <div className="space-y-2">
                      <Button type="submit"
                              className="w-full group"
                              data-loading={isPending}
                              disabled={isPending}>
                        <span className="group-data-[loading=true]:invisible">Kirim</span>
                        <LoaderCircleIcon className="group-data-[loading=true]:visible invisible absolute animate-spin"/>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col">
                  <Link to="/auth/registration"
                        className="text-sm hover:underline">
                    <span className="text-gray-600">Belum ada akun?</span> Daftar sekarang
                  </Link>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}