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
                <path d="M50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10" fill="red" stroke="black" />
            </svg>
        </div>
    )
}

export default AlbyIllus