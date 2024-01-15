'use client'
import { listaAtendimentos } from "@/api/lista-atendimentos"
import Card from "@/components/Card"
import Header from "@/components/Header"
import { useParams   } from "next/navigation"

export default function MesProducao() {
  const params = useParams()
  console.log(params.mes)
  return(
    <div>
      <Header />
      <div className="max-w-[1428px] mt-8 mx-auto">
        {
          listaAtendimentos.map((mes)=>{
           if(parseInt(params.mes as string) === mes.id)
            return(
              <div key={mes.id}>
                
                <h2 className="text-[#fff] text-xl font-semibold mb-2"> {mes.mes} </h2>
                  <div className='flex flex-wrap gap-4'>
                    {mes.dias.map((dia)=>{
                      return(
                        <div key={dia.dia}  >
                          <h3 className="text-[#fff]">Dia {dia.dia}</h3>
                          <div className="flex flex-wrap gap-[16px]">
                            {dia.atendimentos.map((atendimento,index)=>{
                              return(
                                <Card key={index} valor={atendimento.quantidade} descricao={atendimento.tipo} />
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
              </div>
              
            )
          })
        }
      </div>
    </div>
  )
}