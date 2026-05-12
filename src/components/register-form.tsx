import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EyeIcon, Bell, FileText, Star, CreditCard, Gift } from "lucide-react"

export default function RegisterForm() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 grid md:grid-cols-[1.5fr_1fr] gap-16 bg-white">
     
      <section>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Inicia sesión o regístrate para comprar
        </h1>
        
        <div className="flex gap-2 mb-4">
          
          <div className="w-6 h-6 bg-red-500 rounded-sm" />
          <div className="w-6 h-6 bg-green-500 rounded-sm" />
          <div className="w-6 h-6 bg-orange-500 rounded-sm" />
        </div>

        <p className="text-sm text-gray-600 mb-8">
          ¿Tienes cuenta en Sodimac, falabella.com o Tottus? Usa el mismo correo y contraseña para que te podamos reconocer o <span className="underline cursor-pointer">inicia sesión</span>.
        </p>

        <form className="space-y-8">
         
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Correo</Label>
            <Input type="email" placeholder="Ingresa un correo" className="border-t-0 border-x-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-black" />
          </div>

        
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Nombre</Label>
            <Input placeholder="Ingresa un nombre" className="border-t-0 border-x-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-black" />
          </div>

          
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Apellidos</Label>
            <Input placeholder="Ingresa apellidos" className="border-t-0 border-x-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-black" />
          </div>

         
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Tipo de documento</Label>
            <div className="flex gap-4 border-b">
              <Select defaultValue="dni">
                <SelectTrigger className="w-[80px] border-none shadow-none focus:ring-0 px-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dni">DNI</SelectItem>
                  <SelectItem value="ce">CE</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Ingresa un documento de identidad" className="border-none shadow-none focus-visible:ring-0 px-0" />
            </div>
          </div>

        
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Celular</Label>
            <div className="flex items-center border-b">
              <span className="text-sm pr-2 font-semibold">+51</span>
              <Input placeholder="Ingresa un celular" className="border-none shadow-none focus-visible:ring-0 px-0" />
            </div>
          </div>

         
          <div className="space-y-1">
            <Label className="text-gray-500 font-normal">Contraseña</Label>
            <div className="relative border-b">
              <Input type="password" placeholder="Ingresa una contraseña" className="border-none shadow-none focus-visible:ring-0 px-0 pr-10" />
              <EyeIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
          
            <div className="grid grid-cols-3 gap-2 mt-4 text-[11px] text-gray-600">
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> Mín. 8 caracteres</div>
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> 1 número</div>
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> 1 mayúscula</div>
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> 1 minúscula</div>
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> Sin espacio</div>
              <div className="flex items-center gap-1"> <span className="h-1 w-1 bg-black rounded-full" /> Sin usar 'ñ'</div>
            </div>
          </div>

       
          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="terms1" className="mt-1" />
              <Label htmlFor="terms1" className="text-xs leading-tight font-normal text-gray-700">
                Acepto los <span className="underline">términos y condiciones</span> para acumular CMR Puntos en mis compras.
              </Label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="terms2" className="mt-1" />
              <Label htmlFor="terms2" className="text-xs leading-tight font-normal text-gray-700">
                Acepto los <span className="underline">términos y condiciones</span> de Sodimac.com y autorizo la <span className="underline">política de privacidad</span>.
              </Label>
            </div>
          </div>

          <Button className="w-full bg-gray-100 text-gray-400 hover:bg-gray-200 py-6 text-lg font-normal shadow-none">
            Regístrate
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            ¿Ya tienes cuenta? <span className="underline cursor-pointer">Inicia sesión</span>
          </p>
        </form>
      </section>

      <aside className="space-y-12">
        <div>
          <h2 className="text-lg font-semibold mb-6">Beneficios Sodimac</h2>
          <ul className="space-y-6">
            <BenefitItem icon={<Bell className="w-6 h-6" />} text="Recibir notificaciones en tiempo real de tus pedidos." />
            <BenefitItem icon={<FileText className="w-6 h-6" />} text="Revisar tus boletas online." />
            <BenefitItem icon={<Star className="w-6 h-6" />} text="Guardar medios de pago y direcciones favoritas." />
            <div className="flex items-center gap-4">
               <div className="p-2 border-2 border-gray-100 rounded-full">
                 <div className=" " />
               </div>
               <p className="text-sm text-gray-700 font-medium">Ser parte de CMR puntos, el mejor programa de beneficios.</p>
            </div>
          </ul>
        </div>

     
        <div className="h-1 w-full bg-gradient-to-r from-green-400 via-yellow-400 via-red-500 to-blue-500" />

        <div>
          <h2 className="text-lg font-semibold mb-6">Beneficios CMR Puntos</h2>
          <ul className="space-y-6">
            <BenefitItem icon={<CreditCard className="w-6 h-6" />} text="Canje de productos, experiencias, viajes y Gift Cards." />
            <BenefitItem icon={<Gift className="w-6 h-6" />} text="Promociones especiales, cupones de descuento y más." />
          </ul>
        </div>
      </aside>
    </div>
  )
}

function BenefitItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="p-3 border border-gray-300 rounded-full text-gray-600">
        {icon}
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </li>
  )
}