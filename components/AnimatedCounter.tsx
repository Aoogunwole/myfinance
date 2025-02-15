'use client'

import CountUp from "react-countup"

const AnimatedCounter = ({amount} : { amount: number}) => {
  return (
    <div className="w-full">
      <CountUp
      decimal="," 
      prefix="$"
      decimals={4}
      end={amount}/>
    </div>
  )
}

export default AnimatedCounter
