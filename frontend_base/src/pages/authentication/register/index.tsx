import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuth } from "@/lib/useAuth";
import { UserRegister } from "@/lib/interfaces/AuthInterfaces";

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
  passwordConfirmation: z.string()
    .min(6, {
      message: "Senha precisa ter no mínimo 6 caracteres.",
    })
    .max(64, {
      message: "Senha precisa ter no máximo 64 caracteres.",
    })
    .regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&_])[A-Za-z0-9@$!%*?&_]{6,64}$/ ,{
      message: "Senha pode apenas ter letras maiúsculas, minúsculas, números e os seguintes caracteres especiais: @, $, !, %, *, ?, &, _.",
    }),
  email: z.string()
    .max(256, {
      message: "Email precisa ter no máximo 256 caracteres.",
    })
    .regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,{
      message: "Escreva um endereço válido",
    }),
  nome: z.string()
    .max(128, {
      message: "Nome precisa ter no máximo 128 caracteres.",
    })
    .regex( /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[\s'-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/ ,{
      message: "Escreva um endereço válido",
    }),
}).superRefine(({ passwordConfirmation, password }, ctx) => {
  if (passwordConfirmation !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Senhas são diferentes",
      path: ['passwordConfirmation']
    });
  }
});

export default function RegisterPage() {
  const { register } = useAuth();

  const [registerError, setRegisterError] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
      nome: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const valuesTreated = {
      username: values.username,
      password: values.password,
      email: values.email,
      nome: values.nome,
    }

    await register(valuesTreated as UserRegister)
    .then((response) => {
      setRegisterError(!response)
    })
    
  }

  return (
    <Card className='border-0 drop-shadow-none w-[500px] lg:w-[750px]'>
      <CardHeader className=''>
        <img src={Logo} alt="CasAware logo" className='w-1/2 self-center pb-6'/>
        <CardTitle>
          Registrar Usuário no CashAware
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <CardContent className='flex items-center flex-col justify-center space-y-8'>
            {
              registerError
              ? 
                <span className="self-start text-red-500">
                  Erro ao registrar usuário
                </span>
              :
                <></>
            }
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ex.: Amyr Allan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome de usuário</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ex.: AmyrzinGameplays" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ex.: amyrgamer@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirme a senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className='w-full' type="submit">Registrar-se</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
