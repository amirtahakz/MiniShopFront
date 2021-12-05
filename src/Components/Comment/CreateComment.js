import React, { useState } from "react";

export function CreateComment(props) {
    const [state , setState] = useState({Comment : {} , errors : {}});
    const changeHandler = event=>{
         const formData = {[event.target.name] : event.target.value , ProductId : props.data , UserId : 1}
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
        if(!state.Comment.Author){
            errors.Author ='Name Is Empty'
        }
        if(!state.Comment.Text){
            errors.Text ='Text Is Empty'
        }
        setState({...state , errors});
        return !(errors.Author || errors.Text);
    }



  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={state.Comment.Author ||''} onChange={changeHandler} className="form-control" placeholder="Enter Your Name" name="Author" />
        <small id="text-danger" className="form-text text-danger">{state.errors.Author}</small>
      </div>
      <div className="form-group">
        <label>Text</label>
        <textarea value={state.Comment.Text ||''} onChange={changeHandler} className="form-control"rows="5" name="Text" ></textarea>
        <small id="text-danger" className="form-text text-danger">{state.errors.Text}</small>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}
