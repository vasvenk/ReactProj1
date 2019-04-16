import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data"

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            <div className="ui cards">
                {ProductData.products.map(product => <Product {...product}/>)}
            </div>
        </div>
    );
  }

}

export default Cart;
