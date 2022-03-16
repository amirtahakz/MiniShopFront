import React, { useState } from "react";

export function CreateComment(props) {
    const [state , setState] = useState({Comment : {} , errors : {}});
    const changeHandler = event=>{
         const formData = {[event.target.name] : event.target.value , productId : props.data , userId : '3fa85f64-5717-4562-b3fc-2c963f66afa6'}
        setState({...state ,Comment : {...state.Comment , ...formData}});

    }

    const submitHandler = event=>{
        event.preventDefault();
        if (formIsValid()){
            props.onComment(state.Comment);
            setState({Comment : {} , errors : {}});
        }   
    }

    const formIsValid = () =>{
        const errors = {};
        if(!state.Comment.author){
            errors.author ='Name Is Empty'
        }
        if(!state.Comment.text){
            errors.text ='Text Is Empty'
        }
        setState({...state , errors});
        return !(errors.author || errors.text);
    }



  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Author</label>
        <input type="text" value={state.Comment.author ||''} onChange={changeHandler} className="form-control" placeholder="Enter Your Name" name="author" />
        <small id="text-danger" className="form-text text-danger">{state.errors.author}</small>
      </div>
      <div className="form-group">
        <label>Text</label>
        <textarea value={state.Comment.text ||''} onChange={changeHandler} className="form-control"rows="5" name="text" ></textarea>
        <small id="text-danger" className="form-text text-danger">{state.errors.text}</small>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}
