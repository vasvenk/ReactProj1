import React from "react";

class Receipt extends React.Component {

    constructor(props) {
        super(props);
    }

    renderItem(item) {
        return (
            <div className="receipt-item" key={item.name}>
                <div className="receipt-text">
                    {item.productName} X {item.count}
                </div>
                <div className="receipt-text">
                    ${item.price}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="receipt">
                <h2 className="receipt-text">Receipt</h2>
                {this.props.items.map(this.renderItem)}
                <div className="receipt-item">
                    <div className="total">Total:</div>
                    <div className="total">
                        ${this.props.items.reduce((accumulate, item) =>
                        accumulate + (item["price"] * item["count"]), 0).toFixed(2)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Receipt;