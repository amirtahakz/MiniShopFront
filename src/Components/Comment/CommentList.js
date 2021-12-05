import React from "react";
import { Comment } from "./Comment";

export function CommentList(props) {
  if(!props.comments.length){
    return <div className="text-center">No Comment...</div>
  }
  return props.comments.map((item) =>( 
    <ul class="list-group list-group-flush">
      <li class="list-group-item mt-5" key={item.Id}>
        <Comment data={item} />
      </li>
    </ul>  
  ));
}
