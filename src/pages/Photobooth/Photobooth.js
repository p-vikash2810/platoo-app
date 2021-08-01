import React from 'react'
import PhotoboothSection from "../../components/PhotoboothSection/PhotoboothSection"
import { PhotoboothObj } from './Data'

const Photobooth = () => {
    return (
        <>
            <PhotoboothSection {...PhotoboothObj} />
        </>
    )
}

export default Photobooth
