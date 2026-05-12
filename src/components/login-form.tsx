"use client"
import { EyeIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Ingresa un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
})

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  return (
    <div className="relative w-full max-w-md p-8 bg-white border rounded-sm shadow-sm">
   
      <X className="absolute top-4 right-4 text-gray-400 cursor-pointer h-5 w-5" />

  
      <div className="flex justify-between items-center mb-8 grayscale-[0.5] opacity-80">
        <img src="/logos/sodimac.png" alt="Sodimac" className="h-4" />
        <img src="/logos/falabella.png" alt="Falabella" className="h-4" />
        <img src="/logos/tottus.png" alt="Tottus" className="h-4" />
      </div>

      <h2 className="text-2xl font-normal text-gray-800 mb-2">Inicia sesión para comprar</h2>
      <p className="text-sm text-gray-600 mb-8 leading-tight">
        Usa la misma cuenta para ingresar a <span className="font-semibold">Sodimac, falabella.com y Tottus.</span>
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
          
          
          <FormField
            control={form.control}
            name="email"
            render={({ }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-gray-700 font-normal">Correo electrónico</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Ingresa tu correo electrónico" 
                    
                    className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 transition-colors"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({}) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-gray-700 font-normal">Contraseña</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input 
                      type="password"
                      placeholder="Ingresa tu contraseña" 
                      
                      className="border-0 border-b border-gray-300 rounded-none px-0 pr-8 focus-visible:ring-0 focus-visible:border-blue-600 transition-colors"
                    />
                  </FormControl>
                  <EyeIcon className="absolute right-0 bottom-2 h-5 w-5 text-gray-400 cursor-pointer" />
                </div>
              </FormItem>
            )}
          />

          <p className="text-xs text-gray-500 mt-2">
            ¿Olvidaste tu contraseña? No te preocupes, pide un código verificador por <span className="text-blue-600 underline cursor-pointer">correo</span> o <span className="text-blue-600 underline cursor-pointer">SMS</span> para cambiar tu contraseña.
          </p>

          <Button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold h-12 rounded-sm text-lg mt-6">
            Ingresar
          </Button>

          <div className="text-center mt-6 text-sm text-gray-600">
            ¿Aún no tienes cuenta? <span className="text-blue-600 underline font-medium cursor-pointer">Regístrate</span>
          </div>
        </form>
      </Form>
    </div>
  )
}