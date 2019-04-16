import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data"
import Receipt from "./Receipt.js"

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {cartItems: []}
    }

    handleAddToCart(productName, price) {
        let found = false;
        console.log(this.state);
        for (let i = 0; i < this.state.cartItems.length; i++) {
            let product = this.state.cartItems[i];
            if (product["productName"] === productName) {
                found = true;
                let newCart = this.state.cartItems.slice(0);
                newCart[i]["count"] = this.state.cartItems[i]["count"] + 1;
                this.setState({cartItems: newCart});
            }
        }
        if (!found) {
            let newCart = this.state.cartItems.slice(0);
            newCart.push({productName: productName, price: price, count: 1});
            this.setState({cartItems: newCart})
        }
    }

    removeFromCart(productName) {
        console.log(this.state);
        for (let i = 0; i < this.state.cartItems.length; i++) {
            let product = this.state.cartItems[i];
            if (product["productName"] === productName) {
                let newCart = this.state.cartItems;
                newCart.splice(i, 1);
                this.setState({cartItems: newCart});
            }
        }
    }

    render() {
    return (
        <div className="page-content">
            {/*<h2>Add your products here!</h2>*/}
            <div className="ui cards">
                {ProductData.products.map(product =>
                    <Product {...product}
                             onAddToCart={() => this.handleAddToCart(product.name, product.cost)}
                             onRemoveFromCart={() => this.removeFromCart(product.name)}
                    />
                )}
            </div>
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
