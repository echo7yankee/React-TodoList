import React from 'react';

import '../Form.css'

const Form = (props) => {
    return (
        <form 
          className="form"
          onSubmit={props.onSubmitChange}>
            <input
              className="input" 
              placeholder="Enter a todo"
              type="text"
              value= {props.value}
              onChange={props.onHandleChange}
            />
        </form>
    );
}

export default Form;