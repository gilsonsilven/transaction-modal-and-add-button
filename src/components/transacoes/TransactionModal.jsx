'use client'

import { Hind }from 'next/font/google'
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
// fazer com que o modal desapareça quando o usuário clicar em qualquer lugar


const hindTituloModal = Hind(
    {
        weight: '500',
        subsets: ['latin'],
    }
)

const TransactionModal = ({isOpen, changeOpen}) => {

    if(!isOpen) {
        return null;
    }

    return ( 

        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">

            <div className="w-[540px] h-[480px] bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="mt-2 w-[510px] h-[43px] flex-col justify-start items-start gap-5 inline-flex">
                    <p className={`mt-3 text-center text-slate-900 text-xl ${hindTituloModal.className}`}>Nova receita</p>
                    <span className="w-[510px] h-[0px] border border-slate-700"></span>
                </div>

                <div className="w-[500px] mt-[26px] h-14 justify-between items-end inline-flex">
                    <div className="w-[328px] h-[38px] border-l-2 border-b-2 border-slate-700">
                        <input type="text" placeholder="Nome" className="w-full h-full ml-2 focus:outline-none" />
                    </div>
                    <div className="w-[150px] h-[35px] p-2 border-b-2 border-slate-700 justify-start items-center gap-2 flex">
                        <input type="text" placeholder="R$ 00,00" className="mb-2 w-full text-slate-600 text-3xl focus:outline-none font-normal font-['League Spartan']" />
                    </div>
                </div>

                <div className="w-[500px] h-[55px] mt-[18px] justify-between items-end inline-flex">
                    <div className="w-[328px] border-l-2 border-b-2 border-slate-700">
                        <p>Categoria</p>
                    </div>                
                    <div className="w-[150px] h-[35px] border-b-2 border-slate-700 justify-center items-end gap-2 inline-flex">
                        <div className="text-slate-700 text-base font-normal font-['Roboto']">data</div>
                    </div>                        
                </div>

                <div className='w-[500px] h-[55px] flex justify-start items-center gap-3'>
                    <Calendar />
                    <p className="text-slate-700 text-xl font-normal font-['Roboto']">Repetir receita</p>
                    <ArrowDown2 />
                </div>

                <div className="w-[507px] h-10 justify-between items-center inline-flex">
                    <div className="w-[184px] h-10 px-8 py-[7px] bg-stone-50 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <button className="text-slate-700 text-base font-normal font-['Inter']" onClick={() => changeOpen(false)}>Cancelar</button>
                    </div>
                    <div className="w-[184px] h-10 px-8 py-[7px] bg-yellow-500 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <button className="text-slate-600 text-base font-normal font-['Inter']">Adicionar</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default TransactionModal