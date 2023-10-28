import React from 'react'
import { useStore } from "./zustandStore"

export default function ZustandCounter() {
    const {count, increment } = useStore();
  return (
    <div>
        <div>
            <button aria-label='Increment value' onClick={increment}>
                Increment
            </button>
            <span role='contentinfo'>{count}</span>
        </div>
    </div>
  )
}
