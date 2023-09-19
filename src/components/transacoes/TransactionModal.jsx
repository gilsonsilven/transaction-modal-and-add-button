'use client'

import {Roboto}from 'next/font/google'
import {
    ArrowDown2,
    ArrowUp2,
    Calendar
} from 'iconsax-react'

// acertar espaçamento
// checar se a fonte está certa
// checkbox list, como essa checkbox list funciona?
// procurar library pro calendário
// perguntar o que fazer na parte de categorias
// acertar formatação valor (olhar como é feito organizze)
// os tamanhos estão certos?

// tem aquele botão ainda
// integração botão - modal

const TransactionModal = () => {
    return ( 
        <div className="w-[540px] h-[460px] bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
            <div className="mt-2 w-[510px] h-[43px] flex-col justify-start items-start gap-5 inline-flex">
                <p className="text-center text-slate-700 text-xl font-normal font-['Roboto']">Nova receita</p>
                <span className="w-[510px] h-[0px] border border-slate-700"></span>
            </div>

            <div className="w-[500px] h-14 justify-between items-end inline-flex">
                <div className="w-[328px] border-l-2 border-b-2 border-slate-700">
                    <input type="text" placeholder="Nome" className="font-['Roboto']" />
                </div>
                <div className="w-[150px] h-[35px] p-2 border-b-2 border-slate-700 justify-start items-center gap-2 flex">
                    <p className="text-slate-600 text-[32px] font-normal font-['League Spartan']">R$ 00,00</p>
                </div>
            </div>

            <div className="w-[500px] h-[55px] justify-between items-end inline-flex">
                <div className="w-[328px] border-l-2 border-b-2 border-slate-700">
                    <p>Categoria</p>
                </div>                
                <div className="w-[150px] h-[35px] border-b-2 border-slate-700 justify-center items-end gap-2 inline-flex">
                    <div className="text-slate-700 text-base font-normal font-['Roboto']">teste</div>
                </div>                        
            </div>

            <div className='w-[500px] h-[55px] flex justify-start items-center gap-3'>
                <Calendar />
                <p className="text-slate-700 text-xl font-normal font-['Roboto']">Repetir receita</p>
                <ArrowDown2 />
            </div>

            <div className="w-[507px] h-10 justify-between items-center inline-flex">
                <div className="w-[184px] h-10 px-8 py-[7px] bg-stone-50 rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div className="text-slate-700 text-base font-normal font-['Inter']">Cancelar</div>
                </div>
                <div className="w-[184px] h-10 px-8 py-[7px] bg-yellow-500 rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div className="text-slate-600 text-base font-normal font-['Inter']">Adicionar</div>
                </div>
            </div>                
        </div>
    )
}

export default TransactionModal