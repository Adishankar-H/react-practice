export default function Fruits() {
    const fruits = [
        { name: "Apple", color: "Red", emoji: "🍎", price: 5 },
        { name: "Banana", color: "Yellow", emoji: "🍌", price: 10 },
        { name: "Cherry", color: "Red", emoji: "🍒", price: 15 },
        { name: "Grapes", color: "Purple", emoji: "🍇", price: 20 },
    ];

    return (
        <div>
            <ul>
                {fruits.map(fruit => <li key={fruit.name}>{fruit.emoji}: {fruit.name} .... ${fruit.price}</li>)}
            </ul>
        </div>
    )
}