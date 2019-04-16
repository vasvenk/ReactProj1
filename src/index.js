import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.css";

import Cart from "./Cart";


// Add the Cart component to the `#root` element below!
// YOUR CODE HERE
const allProducts = [
    {
        productName: "Apple",
        price: "$20",
        limit: 22
    },
    {
        productName: "Banana",
        price: "$1",
        limit: 10
    },
    {
        productName: "Cherry",
        price: "$3",
        limit: 10
    },
    {
        productName: "Durian",
        price: "$4",
        limit: 3
    }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<Cart allProducts={allProducts}/>, rootElement);
