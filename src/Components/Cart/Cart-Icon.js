import React, { Component } from "react";
import { CartStore } from "../Product/Redux/Store";

export class CartIcon extends Component {
  state = {};
  componentDidMount() {
    this.unsubscribe= CartStore.subscribe(() =>
      this.setState({ count: CartStore.getState().length })
    );
  }
  componentWillUnmount(){
      this.unsubscribe();
  }
  render() {
    return (
      <div>
        <img width="30" src="../Images/cart.png" alt="cart" />
        {this.state.count >0 &&(
          <span
            style={{
              position: "absolute",
              marginTop: -5,
              marginLeft: -10,
              color: "red",
            }}
            className="badge badge-success"
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
