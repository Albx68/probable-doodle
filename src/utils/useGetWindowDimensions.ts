"use client"
import { useEffect, useState } from "react"


// const reducer = (state, action) = () => {

// }

const useGetWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

    useEffect(() => {
        const handleDimensionChange = () => {
            const height = window.innerHeight
            const width = window.innerWidth
            const dimensions = { height, width }
            setDimensions(dimensions)
        }
        window.addEventListener('resize', handleDimensionChange)
        return () => window.removeEventListener('resize', handleDimensionChange)
    }, [])

    return dimensions
}

export default useGetWindowDimensions