import React from "react";
import { Product } from "./Product";


export function ProductList(props){

    return props.data.map((item) =>(
        <div className="col-md-4" key={item.id}>
            <Product data={item} />
         </div>
    ));
    
}