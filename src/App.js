const products = [
  { title: 'Cabbage', isFruit: false, id: 1},
  { title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
  { title: 'Banana', isFruit: true, id: 4},
  { title: 'Orange', isFruit: true, id: 5},
  { title: 'Chocolate', isFruit: false, id: 6},
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'maggenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
