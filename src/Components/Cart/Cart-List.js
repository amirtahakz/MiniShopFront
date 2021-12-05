import React from "react";
import { RemoveFromCart } from "../Product/Redux/Actions";
import { CartStore } from "../Product/Redux/Store";

export function CartList({ ProductsCart }) {
  if (!ProductsCart.length) {
    return <div style={{marginTop:300 , fontSize:50}} className="text-center">No Cart...</div>;
  }
  const RemoveHandler = (props)=>{
    CartStore.dispatch(RemoveFromCart(props))
  }
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">ImageProduct</th>
          <th scope="col">Quantity</th>
          <th scope="col">Changes</th>
        </tr>
      </thead>
      <tbody>
        {ProductsCart.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img
                width="50"
                src={"https://localhost:44333/MyPictures/" + item.ImageProduct}
                alt={item.Name}
              />
            </td>
            <th>{item.Name}</th>
            <td>{item.Price}</td>
            <td>{item.Quantity}</td>
            <td>
              <button onClick={()=> RemoveHandler(item)} className="btn btn-danger">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
