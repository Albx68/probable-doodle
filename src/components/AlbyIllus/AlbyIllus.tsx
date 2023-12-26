import { motion } from 'framer-motion'
import React from 'react'

type TAlbyIllus = {
    canvasHeight: number,
    canvasWidth: number
}

const AlbyIllus = ({ canvasHeight = 400, canvasWidth = 400 }: TAlbyIllus) => {
    const faceCircle = ""
    return (
        <div>
            <svg width={canvasWidth} height={canvasHeight}>
                <path d="M50 10 
           C 77.614 10 90 22.386 90 50 
           C 90 77.614 77.614 90 50 90 
           C 22.386 90 10 77.614 10 50 
           C 10 22.386 22.386 10 50 10" fill="red" stroke="black" />
            </svg>
        </div>
    )
}

export default AlbyIllus