import { colors } from '@/utils/constants/colors'
import { motion } from 'framer-motion'
import React from 'react'

type TAlbyIllus = {
    canvasHeight: number,
    canvasWidth: number
}

const AlbyIllus = ({ canvasHeight = 400, canvasWidth = 400 }: TAlbyIllus) => {
    const faceCircle = ""
    const facePath = `M50 10 
    C 77.614 10 90 22.386 90 50 
    C 90 77.614 77.614 90 50 90 
    C 22.386 90 10 77.614 10 50 
    C 10 22.386 22.386 10 50 10`
    return (
        <div>
            <svg width={canvasWidth} height={canvasHeight} >
                <motion.path d={facePath} fill={colors["face"]} stroke="black" />
            </svg>
        </div>
    )
}

export default AlbyIllus