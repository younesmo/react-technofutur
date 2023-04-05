import { useState } from "react"

interface Props {
    incrementVal: number
}

const Exo2 = ({incrementVal}: Props) => {

    const [count, setCount]= useState<number>(0);

    const handleIncrement= ()=> {
        setCount(prevCount => prevCount+ incrementVal);
    }

  return (
    <>
        <p>Counter: {count}</p>
        <button type="button" onClick={handleIncrement}>Increment</button>
        {count > 0 && <button type="button" onClick={()=> setCount(0)}>Reset</button>}
    </>
  )
}

Exo2.defaultProps ={
    incrementVal: 1
}

export default Exo2;