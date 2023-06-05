import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import style from './DetailPage.module.css';

export default function Details(props){
    const {id}=useParams();
    const [recipe,setRecipe]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(res=>res.json())
        .then(data=>{
            data.name? setRecipe(data):alert(`No hay receta con el Id=${id}`)
        })
        .catch(err=>{
            console.log(err);
            alert('Algo salió mal')
        })
        return ()=>setRecipe({})
    },[id]);
    return(
        <div>            
            <div>
                <h1 className={style.nameDetail}>{recipe[0].name}</h1>
                <img src={recipe[0].image} alt='Imágen no encontrada' />
                <h3 className={style.H3Detail}>HealthScore: {recipe[0].healthScore}</h3>
                <h2 className={style.H2Detail}>Descripción</h2>
                <p className={style.PDetail}>{recipe[0].summary}</p>
                <h2 className={style.H2Detail}>Receta:</h2>
                <ol className={style.PDetail}>
                    {recipe[0].stepToStep.map(st=>{
                        return(<li>{st}</li>)
                    })}
                </ol>
                <h2 className={style.H2Detail}>Tipos de Dieta:</h2>
                <ul className={style.PDetail}>
                    {recipe[0].diets.map(di=>{
                        if(di.hasOwnProperty('name')){
                            return(<li>{di.name}</li>)
                        }else{return(<li>{di}</li>)}
                    })}
                </ul>
            </div>:<p>Loading...</p>
            <Link to='/home'><button>Retornar</button></Link>
        </div>
    )
}