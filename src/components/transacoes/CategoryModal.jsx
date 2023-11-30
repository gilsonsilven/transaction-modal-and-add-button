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
    ArrowRight,
    Coffee,
    Danger,
    Devices,
    Heart,
    House,
    Weight,
    Cake,
    Bank,
    Box,
    Building,
    Bus,
    Car,
    Hospital,
    Lampon,
    MenuBoard,
    Money3,
    People,
    PersonalCard,
    Shop,
    StatusUp,
    Teacher,
    TaskSquare,
    Truck,
    Smilyes
} from 'iconsax-react'

// deixar colorfilter icon colorido?

const CategoryModal = () => {

    const listaDeCores = ['bg-[#E12C00]', 'bg-[#EBE900]', 'bg-[#11D17E]', 'bg-[#004EEB]', 'bg-[#D422E1]', 'bg-[#EBE50B]', 
                            'bg-[#8DBE24]', 'bg-[#F76C4C]', 'bg-[#D12460]', 'bg-[#0095CD]', 'bg-[#006CC3]', 'bg-[#00E1BF]'];

    const [colorOptions, setColorOptions] = useState(false)

    const showColorOptions = () => {
        setColorOptions(!colorOptions)
        if(iconOptions != false) {
            setIconOptions(false)
        }
    }

    const listaDeIcones = ['Truck', 'Coffee']

    const [iconOptions, setIconOptions] = useState(false)

    const showIconOptions = () => {
        setIconOptions(!iconOptions)
        if(colorOptions != false) {
            setColorOptions(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">

            <div className={`w-[480px] bg-white rounded-[15px] ${colorOptions ? 'h-[200px]' : 'h-[100px]'}  ${iconOptions ? 'h-[200px]' : 'h-[100px]'}`}>

                <div className=" h-[100px] flex justify-center items-center gap-[16px]">
                    <div className="w-[300px] h-[48px] pl-2 border-2 rounded border-secondary-200">
                        <input type="text" placeholder="Nome da Categoria" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                    </div>
                    <div onClick={showIconOptions} className="cursor-pointer">                
                        <GalleryAdd color="#000334"/>
                    </div>
                    <div onClick={showColorOptions} className="cursor-pointer">
                        <Colorfilter color="#000334"/>
                    </div>
                    <ArrowRight color="#000334"/>
                </div>
                <div className={`bg-white w-[480px] h-[80px] ${colorOptions ? '' : 'hidden'}`}>
                    <div className="bg-white grid grid-cols-6 gap-[12px] place-items-center">
                        {
                            listaDeCores.map((lista, index) => (
                                <div className={`rounded-full ${lista} w-[32px] h-[32px]`} />
                            ))
                        }
                    </div>
                </div>
                <div className={` bg-white w-[480px] h-[380px] ${iconOptions ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-6 gap-[12px] place-items-center">
                        <div>
                            <Coffee />
                        </div>
                        <div>
                            <Truck />
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryModal