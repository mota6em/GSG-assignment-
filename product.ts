/**
 * This file `product.ts` contains TypeScript code for the following tasks:
 *
 * => Task 4: Defines a `Product` interfcae with two properties (`name` and `price`).
 *   Implements the `getTotalPrice` function, which calculates the total price of
 *   products in given array of products using the `forEach` method to iterate through the array.
 *
 * => Task 5: Validates if a given email is valid using a regular expression (`RegExp`)
 *   and `test` method to check the email format against the defined pattern.
 *  -What is RegExp (short for Regular Expresion)? It is a built in class in JavaScript and TypeScript used for patern matching withn strings.
 *  It allows you to define paterns to search, match, or validate strings, such as checking if an email address is in a valid formate.
 *  The `test` method of `RegExp` checks if the given string matches the patern then it returns `true` or `false`.
 */

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


/**
 * How To Run? 
 *  1. Install Node.js and TypeScript globally if not alerady installed.
 *  2. Compile the TypeScript file to JavaScript using the following command:
 *        `tsc product.ts`
 *  3. Run the compiled JavaScript file using Node.js:
 *        `node product.js`
 */

// Here is a short test after compiling the ts file to js file and running 'node product.js':
const products: Product[] = [
  { name: "Apple", price: 5 },
  { name: "Banana", price: 4 },
  { name: "Olive", price: 6 },
];
console.log(getTotalPrice(products)); // Output should be: 15
console.log(isValidEmail("mota6em@gmail.com")); // Output should be: true
console.log(isValidEmail("@domain.com")); // Output should be: false
console.log(isValidEmail("name@domain")); // Output should be: false
