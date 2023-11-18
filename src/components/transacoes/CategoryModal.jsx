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

import {
    GalleryAdd,
    Colorfilter,
    ArrowRight
} from 'iconsax-react'

// deixar colorfilter icon colorido?

const CategoryModal = () => {

    const listaDeCores = ['#E12C00', '#EBE900', '#11D17E', '#004EEB', '#D422E1', '#EBE50B', 
                            '#8DBE24', '#F76C4C', '#D12460', '#0095CD', '#006CC3', '#00E1BF']

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
            
            <div className="flex flex-col">
                <div className="w-[480px] h-[120px] p-[20px] bg-white rounded-[15px] justify-center items-center inline-flex gap-[20px]">

                    <div className="w-[300px] h-[48px] border-2 rounded border-secondary-200 flex justify-center items-center">
                        <input type="text" placeholder="Nome da Categoria" className="w-full text-secondary-500 h-full text-[16px] focus:outline-none" />
                    </div>                
                    <GalleryAdd color="#000334"/>
                    <Colorfilter color="#000334"/>
                    <ArrowRight color="#000334"/>        
                </div>
                <div className="bg-white">
                    <div className="grid grid-cols-6 gap-[12px]">
                        {
                            listaDeCores.map((lista, index) => (
                                <div className={`rounded-full bg-[${lista}] w-[32px] h-[32px]`}>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryModal