//Iteración sobre un arreglo de objetos

const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
  ];
  
// Iterar usando for...of
for (const book of books) {
    console.log(`${book.title} by ${book.author}`);
  }
  
// Iterar usando forEach
  books.forEach((book) => console.log(`${book.title} by ${book.author}`));
  
// Iterar usando map
  const TitulosL = books.map((book) => book.title);
  console.log(bookTitles);

//Filtrar elementos de un arreglo
const numbers = [1, 5, 10, 15, 20, 25];

// Filtrar números mayores que 10
const greaterThanTen = numbers.filter((num) => num > 10);
console.log(greaterThanTen);

//Encontrar un elemento en un arreglo
const fruits = ["apple", "banana", "orange", "grape"];

// Encontrar la posición de "orange"
const indexOfOrange = fruits.indexOf("orange");
console.log("Index of orange:", indexOfOrange);

// Encontrar el primer elemento que cumple una condición
const foundFruit = fruits.find((fruit) => fruit.length > 5);
console.log("First fruit with length > 5:", foundFruit);

//Modificar elementos de un arreglo
const prices = [10, 20, 30, 40, 50];

// Incrementar todos los precios en un 10%
const increasedPrices = prices.map((price) => price * 1.1);
console.log(increasedPrices);

//Eliminar elementos de un arreglo
const colors = ["red", "blue", "green", "yellow"];

// Eliminar el primer elemento
const removedColor = colors.shift();
console.log("Removed color:", removedColor);

// Eliminar el último elemento
const lastColor = colors.pop();
console.log("Last color:", lastColor);


//------------------

//Desestructuración de objetos
const userInfo = {
    name: "Pablo",
    lastName: "Pablo",
    age: 24,
    address: {
        city: "Quito",
        telephone: "0999999999",
        street: "Av. Amazonas"
    }
};

// Desestructuración básica
const { name, lastName, age, address } = userInfo;
console.log(name, lastName, age, address);

/*// Desestructuración con valor predeterminado
const { name, lastName, age, myAddress = userInfo.address } = userInfo;
console.log(name, lastName, age, myAddress);

// Desestructuración anidada
const { name, lastName, age, address: { street } } = userInfo;
console.log(name, lastName, age, street);

// Desestructuración con el operador rest
const { name, lastName, ...rest } = userInfo;
console.log(name, lastName, rest);
*/

//Congelar un objeto
const Usuario = {
    name: "Pablo",
    lastName: "Pablo",
    age: 24,
    address: {
        city: "Quito",
        telephone: "0999999999",
        street: "Av. Amazonas"
    }
};

Object.freeze(userInfo);
console.log(Object.isFrozen(userInfo));
userInfo.image = "t.ly/Rhgs"; // Esto no funcionará, ya que el objeto está congelado.
console.log(userInfo);

//Sellado de un objeto
const userInfo = {
    name: "Pablo",
    lastName: "Pablo",
    age: 24,
};

Object.seal(userInfo);
console.log(Object.isSealed(userInfo));
userInfo.age = 25; // Esto funcionará, ya que las propiedades existentes pueden ser modificadas.
userInfo.address = "Av. Amazonas"; // Esto no funcionará, ya que no se pueden agregar nuevas propiedades.
console.log(userInfo);

//Creación de un nuevo objeto combinando información
const userInfo = {
    name: "Pablo",
    lastName: "Pablo",
    age: 24,
};

const extraInfo = {
    address: {
        city: "Quito",
        telephone: "0999999999",
        street: "Av. Amazonas"
    },
    friends: ['Peter', 'Mike', 'Camila', 'Joe'],
    state: true,
    sendMail() {
        return `send mail to ${this.friends[0]}`;
    }
};

const combinedInfo = { ...userInfo, ...extraInfo };
console.log(combinedInfo);
