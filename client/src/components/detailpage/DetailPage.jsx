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
                    <h1 className={style.nameDetail}>{myRecipe[0].name}</h1>
                    <img src={myRecipe[0].image} alt='Imágen no encontrada' />
                    <h3 className={style.H3Detail}>HealthScore: {myRecipe[0].healthScore}</h3>
                    <h2 className={style.H2Detail}>Descripción</h2>
                    <p className={style.PDetail}>{myRecipe[0].summary}</p>
                    <h2 className={style.H2Detail}>Receta:</h2>
                    <ol className={style.PDetail}>
                        {myRecipe[0].stepToStep.map(st=>{
                            return(<li>{st}</li>)
                        })}
                    </ol>
                    <h2 className={style.H2Detail}>Tipos de Dieta:</h2>
                    <ul className={style.PDetail}>
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