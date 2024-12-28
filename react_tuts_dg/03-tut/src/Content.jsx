const Content = () => {

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David']
        const randomName = names[Math.floor(Math.random() * names.length)]
        return randomName
    }

    return (
        <main>
            <h2>Hello {handleNameChange()}</h2>
        </main>
    )
}

export default Content