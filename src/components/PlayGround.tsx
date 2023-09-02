"use client"
import useGetWindowDimensions from '@/utils/useGetWindowDimensions'
import { motion } from 'framer-motion'
import React, { useState } from 'react'


const PlayGround = () => {
    const { height, width } = useGetWindowDimensions()
    const [selectedTool, setSelectedTool] = useState<'pencil' | 'eraser'>('pencil')
    const viewBoxHeight = height - 100
    const viewBox = `0 0 ${width} ${viewBoxHeight}`
    const radius = width / 10
    return (
        <div className='flex flex-col gap-4'>
            <svg viewBox={viewBox} height={viewBoxHeight} width={width} className='bg-slate-400'>
                <motion.circle drag cx={radius} cy={radius} r={radius} fill="green" />
            </svg>
            <div className='flex justify-center items-center gap-4'>
                <button className={`p-4  rounded-lg text-black ${selectedTool === "pencil" ? "bg-emerald-100" : "bg-gray-100"}`} onClick={() => setSelectedTool('pencil')}>Pencil</button>
                <button className={`p-4  rounded-lg text-black ${selectedTool === "eraser" ? "bg-emerald-100" : "bg-gray-100"}`} onClick={() => setSelectedTool('eraser')}>Eraser</button>

            </div>
        </div>
    )
}

export default PlayGround