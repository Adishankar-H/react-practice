import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", color: "Red", emoji: "🍎", price: 5, soldOut: true },
    { name: "Banana", color: "Yellow", emoji: "🍌", price: 10, soldOut: false },
    { name: "Cherry", color: "Red", emoji: "🍒", price: 15, soldOut: true },
    { name: "Grapes", color: "Purple", emoji: "🍇", price: 20, soldOut: false },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
