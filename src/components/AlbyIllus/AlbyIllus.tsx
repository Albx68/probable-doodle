"use client"
import { colors } from '@/utils/constants/colors'
import { motion } from 'framer-motion'
import React from 'react'

type TAlbyIllus = {
    canvasHeight?: number,
    canvasWidth?: number
}

const AlbyIllus = ({ canvasHeight = 300, canvasWidth = 300 }: TAlbyIllus) => {
    const faceCircle = ""
    const cx = canvasWidth / 2
    const cy = canvasHeight / 2


    const facePath = getFacePath(canvasWidth, canvasHeight)
    return (
        <div>
            <svg width={canvasWidth} height={canvasHeight} style={{ backgroundColor: "#333" }}>
                <motion.circle />
                <motion.path d={facePath} fill={colors["face"]} stroke="black" />
            </svg>
        </div>
    )
}

export default AlbyIllus


const getFacePath = (canvasWidth: number, canvasHeight: number): string => {
    const cx = canvasWidth / 2
    const cy = canvasHeight / 2
    return `M101 1C45.7715 1 1 45.7715 1 101C1 156.228 45.7715 201 101 201C156.228 201 201 156.228 201 101C201 45.7715 156.228 1 101 1Z`
}

