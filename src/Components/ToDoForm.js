import React, { useState } from 'react'
import { ButtonBase } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import List from './ToDoList';
import EditSharpIcon from '@material-ui/icons/EditSharp';

function Form() {
    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [isEdit, setIsEdit] = useState(null);
    // To prevent refreshing after clicking on Add button 
    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);

    };
    const createList = () => {
        if(input === "")
        {}
        else if(input && !toggle)
        {
            setItem(item.map((elem) => {
                if(elem.id === isEdit)
                {
                    return {...elem, name:input}
                }
                return elem;
               
            }))
            setToggle(true);
            setInput("");
            setIsEdit(null);
        }
        else{
            const allInput = {id: new Date().getTime().toString(), name:input};
        setItem((i) => {
            return [...i, allInput];
        });
        setInput("");
    }
    };
    
    const deleteItem = (index) => {
        const delItm = item.filter((i) => {
            return index !== i.id;
        });
        setItem(delItm);
    };

    const editItem = (id) => {
        let newItem = item.find((elem) =>
        {
            return elem.id === id;
        });
            setToggle(false);
            setInput(newItem.name);
            setIsEdit(id);
        
    }

    return (
        <>
        <div className="main">
         <h1>To Do List</h1>
         <br/>
             <input 
             type='text'
             placeholder='Add to List'
             value={input}
             name='text'
             onChange={handleInput}
            />
            <ButtonBase className="button" onClick={createList}>
               { toggle ? <AddIcon />:<EditSharpIcon/>}
            </ButtonBase>
            <br />
            <br />
            <ol>
                { item.map((val) => {
                    return <List key={val.id} id={val.id} text={val.name} onSelect={deleteItem} onClick={editItem}/>;
                })
                }
            </ol>
            <br />
         </div> 
        </>
    );
}

export default Form;
