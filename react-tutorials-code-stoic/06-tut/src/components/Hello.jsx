const Hello = ({ person }) => {
    return (
        <>
            <h1>{person.message}{person.emoji}{person.name}{person.seat_numbers}</h1>
        </>
    )
}

export default Hello