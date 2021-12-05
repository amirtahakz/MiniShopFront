import React, { Component } from "react";
import { CartList } from "../Components/Cart/Cart-List";
import { CartStore } from "../Components/Product/Redux/Store";

export class CartPage extends Component {
  state = {products:[]};

  componentDidMount() {
    this.setState({ products: CartStore.getState() });
    this.unsubscribe = CartStore.subscribe(() =>
      this.setState({ products: CartStore.getState() })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="mt-5">
          {console.log(this.state)}
        <CartList ProductsCart={this.state.products} />
      </div>
    );
  }
}
