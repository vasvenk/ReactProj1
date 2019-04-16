import React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numClicks: 0};
    }

    // addToCart(event) {
    //     if (this.props.stock === 0) {
    //         alert("This item is out of stock!")
    //     }
    //     else if (this.state.numClicks + 1 > this.props.stock) {
    //         alert("There are too many " + this.props.name + " in your cart!")
    //     }
    //     else {
    //         this.setState(state => ({numClicks: this.state.numClicks + 1}));
    //         alert("There are " + (this.state.numClicks + 1) + " " + this.props.name + " in your cart!");
    //     }
    // }
    render() {
        return <div className="ui fluid card">
            <div className="content">
                <div className="header">{this.props.name}</div>
                <div className="description">
                    Price: ${this.props.cost}
                </div>
            </div>
            <div onClick={() => {this.props.onAddToCart()}} className="ui bottom attached button">
                <i className="add icon"></i>
                Add To Cart
            </div>
            <div onClick={() => {this.props.onRemoveFromCart()}} className="ui bottom attached button">
                <i className="minus icon"></i>
                Remove From Cart
            </div>
        </div>;
    };
}

export default Product;