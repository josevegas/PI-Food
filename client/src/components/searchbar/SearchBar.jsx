import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../actions';

export default function SearchBar(){
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const handleInputChange=(e)=>{
        e.preventDefault();
        setName(e.target.value);
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(getRecipesByName(name));
        setName("");
    }
    return(
        <div>
            <input type='text' placeholder='Buscar...' onChange={e=>handleInputChange(e)} value={name} />
            <button type='submit' onClick={e=>handleSubmit(e)} >Buscar</button>
        </div>
    )
}