import React from 'react'
import { TikTakObj } from './Data'
import Game from '../../components/TikTakToe/Tik-Tak-Toe'

const TikTakToe = () => {
    return (
        <div>
            <Game {...TikTakObj}/>
        </div>
    )
}

export default TikTakToe
