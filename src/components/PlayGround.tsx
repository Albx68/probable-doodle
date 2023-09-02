"use client"
import useGetWindowDimensions from '@/utils/useGetWindowDimensions'
import React from 'react'

const PlayGround = () => {
    const dimensions = useGetWindowDimensions()
    console.log("dimensions", dimensions)
    return (
        <svg>

        </svg>
    )
}

export default PlayGround