'use client'

import {
    Add
} from 'iconsax-react'

import { useState } from 'react'
import ModalTeste from './ModalTeste'

const AddTransactionButton = () => {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
   
        <div className="w-[80px] h-[80px]">
            <button onClick={() => setShowModal(true)} className="w-[80px] h-[80px] bg-logo rounded-full flex justify-center items-center">
                <Add size="64" color="#FFFFFF"/>
            </button>
            
            <ModalTeste />
        </div>

    )
}

export default AddTransactionButton