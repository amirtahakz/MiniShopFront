import React from "react";
import { Link } from "react-router-dom";

export function Product(props){
    const data = props.data;

    return( 
            <div className="card mt-5">
                <img alt={data.Name} src={"https://localhost:44333/MyPictures/"+data.ImageProduct} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{data.Name}</h5>
                <p className="text-success">{data.Price}</p>
                <Link to={"/Detail/" + data.IdProduct}><span className="btn btn-primary">More</span></Link>
              </div>        
            </div>
            )
}