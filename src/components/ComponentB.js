import React from 'react'
import { useCounter } from '../contexts/CounterContext'

const ComponentB = () => {

    const { increaseCount, decreaseCount } = useCounter()

    return (
        <div style={{backgroundColor: 'blue'}}>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    )
}

export default ComponentB
