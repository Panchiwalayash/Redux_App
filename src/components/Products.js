import React from "react";
import Product from "./Product";
import "./Product.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "assets/1.jpg",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "assets/2.jpg",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "assets/3.jpg",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "assets/4.jpg",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "assets/5.jpg",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
