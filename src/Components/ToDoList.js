import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditSharpIcon from '@material-ui/icons/EditSharp';

function ToDoList(props) {
    

    return (
        <div className="list">
            <li> {props.text} </li>
            <EditSharpIcon className="edit" onClick={ () =>
            {props.onClick(props.id)}
            }/>
            <DeleteForeverIcon className="delete" onClick={() =>
            {props.onSelect(props.id)}
            } />
        </div>
    );
}

export default ToDoList;
