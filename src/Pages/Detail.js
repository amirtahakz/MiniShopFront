import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CommentList } from "../Components/Comment/CommentList";
import { CreateComment } from "../Components/Comment/CreateComment";
import { AddToCart } from "../Components/Product/Redux/Actions";
import { CartStore } from "../Components/Product/Redux/Store";
import { ProductService } from "../Services/ProductService";

// export function Details(){

//     const { id } = useParams();
//     const data = ProductService.GetProductById(id);

//     return(
//      <div className="row">
//          <div className="col-md-5">
//              <img alt={data.Title} src={data.Img} width="100%"/>
//          </div>
//          <div className="col-md-7">
//              <h1>{data.Title}</h1>
//              <p>{data.Des}</p>
//              <strong>{data.Price}</strong>
//          </div>
//     </div>
//     )
// }

export class Details extends React.Component {
  state = {};
  componentDidMount() {
    const id = this.props.match.params.id;

    ProductService.GetProductById(id).then(({ data }) =>
      this.setState({ data })
    );
    ProductService.GetComments(id).then((response) =>
      this.setState({ Comments: response.data })
    );
    this.unsubscribe = CartStore.subscribe(() =>{
      console.log(CartStore.getState())
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  AddToCartHandler(){
    CartStore.dispatch(AddToCart(this.state.data));
  }



  async submitComment(Comment) {
    await ProductService.PostComment(Comment);
  }
  render() {
    const Product = this.state.data;
    const Comments = this.state.Comments;

    // ----Loading---- //
    if (!Product) {
      return <div className="text-center mt-5">Loading...</div>;
    }
    if (!Comments) {
      return <div className="text-center mt-5">Loading...</div>;
    }
    // ----Loading---- //

    return (
      <Fragment>
        <div className="row mt-5">
          <div className="col-md-5">
            <img
              alt={Product.name}
              src={"https://localhost:44333/MyPictures/" + Product.imageProduct}
              width="100%"
            />
          </div>
          <div className="col-md-7">
            <h1>{Product.name}</h1>
            <p>{Product.name}</p>
            <strong>{Product.price}</strong>
            <br />
            <button onClick={this.AddToCartHandler.bind(this)} className="mt-5 btn btn-primary btn-lg">Add To Cart</button>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="list-group">
              <CommentList comments={Comments} />
              <hr className="my-5" />
              <CreateComment onComment={this.submitComment.bind(this)} data={Product.id} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
