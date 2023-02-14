import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Task.css';
import Draggable from 'react-draggable';


function Task(props) {
    let hex = props.color;

    let r, g, b, lum;

    let nib = hex.split(''); 

    r = parseInt(nib[1]+nib[2],16);
    g = parseInt(nib[3]+nib[4],16);
    b = parseInt(nib[5]+nib[6],16);

    lum = (r * 299 + g * 587 + b * 114) / 1000;

    const componentStyle = {
        backgroundColor: props.color || '#dddddd',
        ...(lum >128 ? {color: '#000'} : {color: '#fff'})
    }

    console.log(hex, r, g, b)
    return (
        <ul className='task'>

            {props.tasks.map((tasks, index) => (
                <Draggable>
                    <div className="card" style={componentStyle}>
                        <div className="content">
                            <li key={props.tasks}>{tasks}
                                <span>
                                    <FaEdit onClick={(e) => props.handleEdit(e, index)} className='edit'/>
                                    <FaWindowClose onClick={(e) => props.handleDelete(e, index)} className='delete' />
                                </span>
                            </li>
                        </div>
                    </div>
                </Draggable>

            ))
            }
        </ul >
    )
}

export default Task;