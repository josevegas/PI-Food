import React from 'react';
import styles from './Recipe.module.css';

export default function Recipe({image,name,diets}){
    return(
        <div className={styles.Content}>
            <h3>{name}</h3>
            <p>Diets:<br /><ol>{diets.map(di=>{
                 if(di.hasOwnProperty('name')){
                    return(<li>{di.name}</li>)
                }else{return(<li>{di}</li>)}})}</ol></p>
            <img src={image} alt='imagen no encontrada' width='200px' height='250px'/>
        </div>
    )
}