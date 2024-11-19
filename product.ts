//Task 4
interface Product {
  name: string;
  price: number;
}
function getTotalPrice(params: Product[]): number {
  let totalPrice = 0;
  params.forEach((product) => (totalPrice += product.price));
  return totalPrice;
}

//Task 5
const emailRegex = new RegExp("^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$");
function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}
