const Content = () => {

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David']
        const randomName = names[Math.floor(Math.random() * names.length)]
        return randomName
    }


    const handleClick = () => {
        alert('You clicked the button!')
    }


    const handleClick2 = (name) => {
        alert(`${name} clicked the button!`)
    }


    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <h2 onDoubleClick={handleClick}>Hello {handleNameChange()}</h2>
            <button onClick={handleClick}>Click here!</button>
            <button onClick={() => handleClick2(handleNameChange())}>Click here!</button>
            <button onClick={(e) => handleClick3(e)}>Click here!</button>
        </main>
    )
}

export default Content