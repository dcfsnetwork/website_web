import { useCallback, useEffect, useState } from 'react'

const loopType = {
  FAST: 20000,
  SLOW: 60000,
  NONE: 0
}

export default function useLoop(type: keyof typeof loopType = 'FAST') {
  const [loopNum, setLoopNum] = useState(0)

  const loop = useCallback(() => {
    if (loopType.NONE === loopType[type]) return
    return setInterval(() => {
      setLoopNum(pre => ++pre)
    }, loopType[type])
  }, [type])

  useEffect(() => {
    const timer = loop()
    return () => {
      timer && clearInterval(timer)
    }
  }, [loop])

  return loopNum
}
