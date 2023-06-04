import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getDetails } from '../../actions';
import style from './DetailPage.module.css';

export default function Details(props){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getDetails(props.match.params.id));
    },[dispatch]);
    const myRecipe=useSelector(state=>state.details)
    return(
        <di>
            {
                myRecipe.length>0?
                <div>
                    <h1>{myRecipe[0].name}</h1>
                    <img src={myRecipe[0].image} alt='Imágen no encontrada' />
                    <h3>HealthScore: {myRecipe[0].healthScore}</h3>
                    <h2>Descripción</h2>
                    <p>{myRecipe[0].summary}</p>
                    <h2>Receta:</h2>
                    <ol>
                        {myRecipe[0].stepToStep.map(st=>{
                            return(<li>{st}</li>)
                        })}
                    </ol>
                    <h2>Tipos de Dieta:</h2>
                    <ul>
                        {myRecipe[0].diets.map(di=>{
                            if(di.hasOwnProperty('name')){
                                return(<li>{di.name}</li>)
                            }else{return(<li>{di}</li>)}
                        })}
                    </ul>
                </div>:<p>Loading...</p>
            }
            <Link to='/home'><button>Retornar</button></Link>
        </di>
    )
}