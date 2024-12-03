import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuth } from "@/lib/useAuth";
import { UserLogin } from "@/lib/interfaces/AuthInterfaces";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Logo from '@/assets/images/logo.png'


const formSchema = z.object({
  username: z.string()
    .min(3, {
      message: "Nome de usuário precisa ter no mínimo 3 caracteres.",
    })
    .max(64, {
      message: "Nome de usuário precisa ter no máximo 64 caracteres.",
    })
    .regex( /^\w{3,64}$/ ,{
      message: "Nome de usuário pode apenas ter letras maiúsculas, minúsculas, números e subtraços (_).",
    }),
  password: z.string()
    .min(6, {
      message: "Senha precisa ter no mínimo 6 caracteres.",
    })
    .max(64, {
      message: "Senha precisa ter no máximo 64 caracteres.",
    })
    .regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&_])[A-Za-z0-9@$!%*?&_]{6,64}$/ ,{
      message: "Senha pode apenas ter letras maiúsculas, minúsculas, números e os seguintes caracteres especiais: @, $, !, %, *, ?, &, _.",
    }),
})


export default function LoginPage() {
  const { login } = useAuth()

  const [loginError, setLoginError] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login(values as UserLogin)
    .then((response) => {
      setLoginError(!response)
    })
  }

  return (
    <Card className='border-0 drop-shadow-none w-[500px] lg:w-[750px]'>
      <CardHeader className=''>
        <img src={Logo} alt="CasAware logo" className='w-1/2 self-center pb-6'/>
        <CardTitle>
          Entrar no CashAware
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <CardContent className='flex items-center flex-col justify-center space-y-8'>
            {
              loginError
              ? 
                <span className="self-start text-red-500">
                  Usuário ou senha incorretos
                </span>
              :
                <></>
            }
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Nome de usuário</FormLabel> */}
                  <FormControl>
                    <Input type="text" placeholder="Nome de usuário" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Senha</FormLabel> */}
                  <FormControl>
                    <Input type="password" placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className='w-full' type="submit">Entrar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
