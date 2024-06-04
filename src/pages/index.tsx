import { useState } from "react"

let count2 = 0
function MyButton() {
    const [count, setCount] = useState(1113)
    const [num, setNum] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
        setNum(num + 1)
        count2 = count2 + 1
        console.log("🚀 ~ handleClick ~ count2:", count2)
        console.log("🚀 ~ handleClick ~ count:", count)
    }
    return (
        <button
            onClick={handleClick}
            className='font-bold bg-stone-300 rounded-lg border border-stone-700 p-3'
        >
            Clicked {count} times Clicked {count2} times number {num} times
        </button>
    )
}
function Func() {
    return "abc"
}

function MyButton2() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button
            onClick={handleClick}
            className='font-bold bg-stone-300 rounded-lg border border-stone-700 p-3'
        >
            Clicked {count} times
        </button>
    )
}

export default function MyApp() {
    return (
        <>
            <MyButton2 />
            <MyButton />
            <Func />
        </>
    )
}
