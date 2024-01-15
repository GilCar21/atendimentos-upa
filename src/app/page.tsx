"use client"
import { listaAtendimentos } from '@/api/lista-atendimentos'
import Card from '@/components/Card'
import Header from '@/components/Header'

export default function Home() {

  return (
    <div>
      <Header />
      <div className="max-w-[1428px] mx-auto pt-[48px]" >
        <h2 className="text-[#fff]">Janeiro</h2>
        <div className='flex gap-[16px] flex-wrap'>
          {
            listaAtendimentos.map((atendimento, index)=>{
              return(
                <Card key={index} valor={atendimento.quantidade} descricao={atendimento.tipo} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
