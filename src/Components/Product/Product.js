import React from "react";
import { Link } from "react-router-dom";

export function Product(props) {
  const data = props.data;

  return (
    <div className="card mt-5">
      {/* <img alt={data.name} src={"https://localhost:44332/Ui.Api/Pictures/" + data.imageProduct} className="card-img-top" /> */}
      <img
        alt={data.name}
        src="../Images/headphone.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="text-success">{data.price}</p>
        <Link to={"/Detail/" + data.id}>
          <span className="btn btn-primary">More</span>
        </Link>
      </div>
    </div>
  );
}
