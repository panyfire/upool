import { useEffect, useState } from 'react'

const getWidth = () => window.innerWidth
const getHeight = () => window.innerHeight

export function useMobileDisplaySize() {
  const [width, setWidth] = useState(getWidth)
  const [height, setHeight] = useState(getHeight)

  useEffect(() => {
    const onResize = () => {
      setWidth(getWidth)
      setHeight(getHeight)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return { width, height }
}
