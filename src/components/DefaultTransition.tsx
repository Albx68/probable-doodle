"use client"

import React from 'react'
import { motion } from 'framer-motion';
import useGetWindowDimensions from '@/utils/useGetWindowDimensions';

const DefaultTransition = () => {
    const { height, width } = useGetWindowDimensions()
    const viewBox = `0 0 ${width} ${height}`

    return (
        <svg viewBox={viewBox} height={height} width={width}>
            <motion.circle cx={400} cy={400} r={100} fill={"#39d353"} />
        </svg>
    )
}

export default DefaultTransition