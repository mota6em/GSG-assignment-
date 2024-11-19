//Task 4
interface Product {
  name: string;
  price: number;
}
function getTotalPrice(params: Product[]) : number {
  let totalPrice = 0;
  params.forEach((product) => (totalPrice += product.price));
  return totalPrice;
}
