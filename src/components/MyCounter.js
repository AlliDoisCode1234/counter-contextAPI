import React from 'react'
import { useCounter } from "../contexts/CounterContext"

const MyCounter = () => {
    
const { count, increaseCount, decreaseCount } = useCounter();

    return (
        <div>
            <h3>Counter Component</h3>
            <p>Count is: {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    )
}

export default MyCounter
