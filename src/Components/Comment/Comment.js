import React from "react";

export function Comment(props) {
  const data = props.data; 
  return (
    <div className="row">
        <div className="col-2">
            <img width="100%" className="responsive-img" alt="" src="../Images/images.png" />
        </div>
        <div className="col-10">
            <h3 className="heading mt-4">{data.author}</h3>
            <p>{data.text}</p>
        </div>
    </div>
  );
}
