import React from "react";
import { ProductList } from "../Components/Product/ProductList";
import { ProductService } from "../Services/ProductService";

export class HomePage extends React.Component {
  // state ={Products : ProductService.GetProducts()};
  fetchData() {
    ProductService.GetProducts(this.props.location.search).then((response) =>
      this.setState({ Products: response.data })
    );
  }
  state = { Products: [] };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ProductList data={this.state.Products} />
        </div>
      </div>
    );
  }
}
