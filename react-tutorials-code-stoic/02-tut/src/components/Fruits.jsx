export default function Fruits() {
    const fruits = ['apple', 'banana', 'cherry', 'mango'];
    return (
        <div>
            <ul>
                {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
            </ul>
        </div>
    )
}