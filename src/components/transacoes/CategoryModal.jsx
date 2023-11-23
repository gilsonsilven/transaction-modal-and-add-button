'use client'

//icone galeryadd
//icone colorfilter

// opções icones para o user escolher
/**
 * coffee 
 * danger
 * devices
 * heart
 * house
 * weight
 * cake
 * bank
 * box
 * building
 * bus
 * car
 * hospital
 * lampon
 * menuboard
 * money3
 * people
 * personalcard
 * shop
 * statusup
 * Teacher
 * TaskSquare
 * Truck
 * Smileys
 */

import { useState } from 'react';

import {
    GalleryAdd,
    Colorfilter,
    ArrowRight
} from 'iconsax-react'

// deixar colorfilter icon colorido?

const CategoryModal = () => {

    const listaDeCores = ['bg-[#E12C00]', 'bg-[#EBE900]', 'bg-[#11D17E]', 'bg-[#004EEB]', 'bg-[#D422E1]', 'bg-[#EBE50B]', 
                            'bg-[#8DBE24]', 'bg-[#F76C4C]', 'bg-[#D12460]', 'bg-[#0095CD]', 'bg-[#006CC3]', 'bg-[#00E1BF]'];

    const [colorOptions, setColorOptions] = useState('false')

    const showColorOptions = () => {
        setColorOptions(!colorOptions)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            

            <div className={`w-[480px] bg-white rounded-[15px] ${colorOptions ? 'h-[220px]' : 'h-[120px]'} `}>

                <div className=" h-[100px] flex justify-center items-center gap-[16px]">
                    <div className="w-[300px] h-[48px] border-2 rounded border-secondary-200">
                        <input type="text" placeholder="Nome da Categoria" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                    </div>                
                    <GalleryAdd color="#000334"/>
                    <div onClick={showColorOptions} className="cursor-pointer">
                        <Colorfilter color="#000334"/>
                    </div>
                    <ArrowRight color="#000334"/>
                </div>
                <div className={`bg-white w-[480px] h-[100px] ${colorOptions ? '' : 'hidden'}`}>
                    <div className="bg-black grid grid-cols-6 gap-[12px] place-items-center">
                        {
                            listaDeCores.map((lista, index) => (
                                <div className={`rounded-full ${lista} w-[32px] h-[32px]`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryModal