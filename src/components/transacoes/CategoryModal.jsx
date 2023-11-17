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
 * não achei
 * 
 * 
 */

import {
    GalleryAdd,
    Colorfilter,
    ArrowRight
} from 'iconsax-react'

const CategoryModal = () => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            
            <div className="w-[480px] h-[120px] p-[20px] bg-white rounded-[15px] justify-center items-center inline-flex gap-[20px]">
                <div className="w-[300px] h-[48px] border-2 rounded border-secondary-200 flex justify-center items-center">
                    <input type="text" placeholder="Nome da Categoria" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                </div>                
                <GalleryAdd />
                <Colorfilter />
                <ArrowRight />                
            </div>

        </div>
    )
}

export default CategoryModal