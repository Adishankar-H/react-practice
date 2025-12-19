export default function Fruit({ name, emoji, price, soldOut }) {
  return (
    <li>
      {emoji}: {name} .... ${price} .....
      {soldOut ? "sold out" : "stock available"}
    </li>
  );
}
