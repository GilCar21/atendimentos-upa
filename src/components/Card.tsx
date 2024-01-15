"use client"
import { Dispatch, SetStateAction, useState } from "react"

interface info{
    valor: number
    descricao: string
}
export default function Card({valor, descricao}: info){
    const [count,setCount] = useState(valor)
    
    return(
        <div className="bg-[#F6F0F0] flex flex-col justify-between rounded-[8px] w-[164px] gap-2">
            <div className="font-normal h-auto p-2">
                {descricao}
            </div>
            <div className="bg-[#25527E] flex justify-between items-center p-2 rounded-b-[8px]">
                <button className="w-[30px] h-[30px] rounded-full bg-slate-50 font-[#000]"
                    onClick={()=>setCount(prev => --prev)}    
                >
                    -
                </button>
                <p className="text-[#fff]">{count}</p>
                <button className="w-[30px] h-[30px] rounded-full bg-slate-50 font-[#000]"
                    onClick={()=>setCount(prev => ++prev)}
                >
                    +
                </button>
            </div>
        </div>
    )
}