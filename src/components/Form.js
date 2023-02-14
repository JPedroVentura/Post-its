import React from "react";

import './Form.css';

function Form(props) {
    return (
        <>
            <h1 className="task-title">My Tasks</h1>
            <form action='#' className='form' onSubmit={props.handleSubmit}>
                <input placeholder="My Task is..." type='text' className="input-text" onChange={props.handleChange}
                    value={props.newTask} required={true} />
                <button type='submit' className="input-btn">+</button>
                <input type='color' className="color" onChange={props.handleColor}
                    value={props.newColor} />
            </form>
        </>
    )
}

export default Form;