"use client"
import { useEffect, useState } from "react"

const useGetWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({ height: window?.innerHeight || 0, width: window?.innerWidth || 0 })

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