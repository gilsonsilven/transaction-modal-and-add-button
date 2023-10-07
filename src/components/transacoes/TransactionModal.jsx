'use client'

import { Hind, Inter, Roboto }from 'next/font/google'
import {
    ArrowDown2,
    ArrowUp2,
    Calendar,
    Stop,
    TickSquare
} from 'iconsax-react'

import './checkBoxStyle.css'

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


// transformar checkbox em componentes

const hindTituloModal = Hind(
    {
        weight: '500',
        subsets: ['latin'],
    }
)

const interTextButton = Inter(
    {
        weight: '500',
        subsets: ['latin'],
    }
)

const robotoTextCheckboxOp = Roboto(
    {
        weight: '500',
        subsets: ['latin']
    }
)

const CheckBoxOptions = () => {

    return (

        <div className='w-[500px] h-[80px] flex flex-col justify-start gap-4 mb-10'>
            <div className='checkbox-container'>
                <input className='' type="checkbox" name="everyday"/>
                <label className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500`} />
                <span className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500 ml-5`}>Todos os dias</span>
            </div>
            <div className='checkbox-container'>
                <input className='' type="checkbox" name="everyday"/>
                <label className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500`} />
                <span className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500 ml-5`}>Todas as semanas na quinta</span>
            </div>                    
            <div className='checkbox-container'>
                <input className='' type="checkbox" name="everyday"/>
                <label className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500`} />
                <span className={`${robotoTextCheckboxOp.className} text-[14px] text-secondary-500 ml-5`}>Todos os meses no dia 07</span>
            </div>                                      
        </div>        
    )

}

const TransactionModal = ({modalIsOpen, changeModalIsOpen}) => {

    if(!modalIsOpen) {
        return null;
    }

    return ( 

        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            <div className="w-[540px] h-[480px] bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
                <div className="mt-2 w-[500px] h-[43px] flex-col justify-start items-start gap-5 inline-flex">
                    <p className={`mt-3 text-center text-secondary-500 text-xl ${hindTituloModal.className}`}>Nova receita</p>
                    <span className="w-[500px] h-[0px] border-b border-secondary-500"></span>
                </div>

                <div className="w-[500px] mt-[26px] h-14 justify-between items-end inline-flex">
                    <div className="w-[328px] h-[38px] border-l border-b border-secondary-500">
                        <input type="text" placeholder="Nome" className="w-full h-full ml-2 focus:outline-none" />
                    </div>
                    <div className="w-[150px] h-[35px] p-2 border-b border-secondary-500 justify-start items-center gap-2 flex">
                        <input type="text" placeholder="R$ 00,00" className="mb-2 w-full text-slate-600 text-3xl focus:outline-none font-normal font-['League Spartan']" />
                    </div>
                </div>

                <div className="w-[500px] mt-[26px] justify-between items-end inline-flex">
                    <div className="w-[328px] h-[38px] border-l border-b border-slate-700">
                        <p className="ml-1 p-[5px]">Categoria</p>
                    </div>                
                    <div className="w-[150px] h-[35px] border-b border-slate-700 justify-center items-end gap-2 inline-flex">
                        <div className="text-slate-700 text-base font-normal font-['Roboto']">data</div>
                    </div>                        
                </div>

                <div className='w-[500px] h-[55px] mt-[8px] flex'>
                    <div className='flex justify-start items-center gap-3'>
                        <Calendar size="28px" color="#000334"/>
                        <p className={`text-secondary-500 text-xl font-normal ${hindTituloModal.className}`}>Repetir receita</p>
                        <ArrowDown2 />
                    </div>
                    
                    <div className='flex relative justify-end items-end'>
                        <div className="w-[267px] h-[55px]">                    
                            <div className="w-[267px] h-12 left-0 top-[7px] absolute justify-center items-center inline-flex">
                                <div className="w-[267px] h-12 border-l border-b border-slate-900" />
                            </div>                        
                        </div>
                        <div className="left-[16px] top-[19px] absolute justify-start items-start gap-1 inline-flex">
                            <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-normal">Conta</div>
                        </div>                        
                    </div>              
                </div>

                <CheckBoxOptions />

                <div className="w-[507px] h-10 justify-between items-center inline-flex">
                    <div className="w-[184px] h-10 px-8 py-[7px] bg-[#E8EEF4] rounded-[5px] justify-center items-center gap-2.5 flex cursor-pointer" onClick={() => changeModalIsOpen(false)}>
                        <button className={`text-secondary-500 text-base ${interTextButton.className}`}>Cancelar</button>
                    </div>
                    <div className="w-[184px] h-10 px-8 py-[7px] bg-primary-500 rounded-[5px] justify-center items-center gap-2.5 flex">
                        <button className={`text-secondary-500 text-base ${interTextButton.className}`}>Adicionar</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default TransactionModal