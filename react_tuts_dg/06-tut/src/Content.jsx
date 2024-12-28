import { useState } from "react"

const Content = () => {

    const [name, setName] = useState('John')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David']
        const randomName = names[Math.floor(Math.random() * names.length)]
        setName(randomName)
    }

    const incrementCount = () => {
        console.log("1")
        handleClick()
        console.log("2")
        setCount(count + 1)
        console.log("3")
    }


    const handleClick = () => {
        console.log("4")
        setCount(count - 1)
    }


    return (
        <main>
            {count}
            {name}
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={incrementCount}>Click here!</button>
        </main>
    )
}

export default Content