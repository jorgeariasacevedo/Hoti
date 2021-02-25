import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Jorge",
      email: "jorgearias-2008@hotmail.com",
      password: bcrypt.hashSync("12345", 9),
      isAdmin: true,
    },
    {
      name: "Jhon",
      email: "user2321@hotmail.com",
      password: bcrypt.hashSync("1234533", 5),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Campera camila gris",
      category: "camperas",
      image: "/images/p1.jpg",
      price: 65,
      countInStock: 10,
      brand: "camila",
      rating: 4.5,
      numReviews: 10,
      description: "Taslan bomber alta calidad",
    },
    {
      name: "Mameluco sofia",
      category: "mamelucos",
      image: "/images/p2.jpg",
      price: 65,
      countInStock: 0,
      brand: "camila",
      rating: 4.5,
      numReviews: 10,
      description: "Taslan bomber alta calidad",
    },
    {
      name: "conjunto minerva",
      category: "conjunto",
      image: "/images/p1.jpg",
      price: 95,
      countInStock: 30,
      brand: "camila",
      rating: 3,
      numReviews: 8,
      description: "Taslan bomber alta calidad",
    },
  ],
};

export default data;
