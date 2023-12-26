"use client"
import { colors } from '@/utils/constants/colors'
import { vec } from '@/utils/helpers/path'
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


    const facePath = getFacePath(canvasWidth, canvasHeight, 2)
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


const getFacePath = (canvasWidth: number, canvasHeight: number, curveFactor: number): string => {
    const cx = canvasWidth / 2
    const cy = canvasHeight / 2
    const p1 = vec(0, cy)
    const p2 = vec(cx, 0)
    const p3 = vec(canvasWidth, cy)
    const p4 = vec(cx, canvasHeight)

    const quarterWidth = canvasWidth / 4
    const quarterHeight = canvasHeight / 4

    const handle1x = 0
    const handle1y = quarterHeight

    const handle2x = quarterWidth
    const handle2y = 0

    const handle3x = quarterWidth * 3
    const handle3y = 0

    const handle4x = canvasWidth
    const handle4y = quarterHeight

    const handle5x = canvasWidth
    const handle5y = quarterHeight * 3

    const handle6x = quarterWidth * 3
    const handle6y = canvasHeight

    const handle7x = quarterWidth
    const handle7y = canvasHeight

    const handle8x = 0
    const handle8y = quarterHeight * 3

    // const handles = [];

    // for (let i = 0; i < 8; i++) {
    //     const angle = (i * Math.PI) / 4; // Divide the circle into 8 angles

    //     // Define the radius for the handles
    //     const radius = i % 2 === 0 ? canvasWidth : canvasHeight;

    //     // Calculate the coordinates using polar to Cartesian conversion
    //     const handleX = canvasWidth / 2 + radius * Math.cos(angle);
    //     const handleY = canvasHeight / 2 + radius * Math.sin(angle);

    //     handles.push(vec(handleX, handleY));
    // }

    const handle1 = vec(handle1x, handle1y);
    const handle2 = vec(handle2x, handle2y);
    const handle3 = vec(handle3x, handle3y);
    const handle4 = vec(handle4x, handle4y);
    const handle5 = vec(handle5x, handle5y);
    const handle6 = vec(handle6x, handle6y);
    const handle7 = vec(handle7x, handle7y);
    const handle8 = vec(handle8x, handle8y);

    return `M${p1.x} ${p1.y}
    C${handle1.x} ${handle1.y} ${handle2.x} ${handle2.y} ${p2.x} ${p2.y}
    C${handle3.x} ${handle3.y} ${handle4.x} ${handle4.y} ${p3.x} ${p3.y}
    C${handle5.x} ${handle5.y} ${handle6.x} ${handle6.y} ${p4.x} ${p4.y}
    C${handle7.x} ${handle7.y} ${handle8.x} ${handle8.y} ${p1.x} ${p1.y}


    `
}

//Z
// C1 156.228 45.7715 201 ${p2.x} ${p2.y}
// C156.228 201 201 156.228 ${p3.x} ${p3.y}
// C201 45.7715 156.228 1 ${p4.x} ${p4.y}