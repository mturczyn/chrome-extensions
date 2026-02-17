import { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>XHR Interceptor</h1>
            <p>
                This is a Chrome extension built with Vite Plugin Web Extension
                and React for UI elements.
            </p>
            <hr />
            <div
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center',
                    gap: '0.2rem',
                    gridTemplateColumns: 'auto 1fr auto',
                }}
            >
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c - 1)}>-</button>
            </div>
        </div>
    )
}
