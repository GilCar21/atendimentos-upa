import Image from "next/image";
import { IoMenu } from "react-icons/io5";

export default async function Header(){

    return(
        <header className="w-full h-[98px] bg-slate-50">
          <div className="max-w-[1428px] h-[98px] bg-slate-50 m-auto flex justify-between items-center" >
             <div>
              <IoMenu className="w-12 h-12" />
             </div>
             <div className="text-[#25527E] w-auto font-bold text-2xl ">
                Produção Pronto atendimento Canguaretama
            </div>
             <div>
                <Image src="/logo_canguaretama.png" alt="logo" width={176} height={69}/>
             </div>
          </div>
        </header>
    )
}