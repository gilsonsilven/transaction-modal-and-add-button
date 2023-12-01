'use client'

//icone galeryadd
//icone colorfilter


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
    LampOn,
    MenuBoard,
    Money3,
    People,
    Personalcard,
    Shop,
    StatusUp,
    Teacher,
    TaskSquare,
    Truck,
    Smileys,
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

    const [iconOptions, setIconOptions] = useState(false)

    const showIconOptions = () => {
        setIconOptions(!iconOptions)
        if(colorOptions != false) {
            setColorOptions(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">

            <div className={`w-[480px] bg-white rounded-[15px] ${colorOptions ? 'h-[200px]' : 'h-[100px]'}  ${iconOptions ? 'h-[280px]' : 'h-[100px]'}`}>

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
                                <div className={`cursor-pointer rounded-full ${lista} w-[32px] h-[32px]`} />
                            ))
                        }
                    </div>
                </div>
                <div className={` bg-white w-[480px] h-[140px] ${iconOptions ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-6 gap-[10px] place-items-center">
                        <div className="cursor-pointer">
                            <Coffee color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Truck color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Danger color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Devices color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Heart color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <House color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Weight color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Cake color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Bank color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Box color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Building color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Bus color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Car color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Hospital color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <LampOn color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <MenuBoard color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Money3 color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <People color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Personalcard color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Shop color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <StatusUp color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Teacher color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <TaskSquare color="#000334" size="32px"/>
                        </div>
                        <div className="cursor-pointer">
                            <Smileys color="#000334" size="32px"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryModal