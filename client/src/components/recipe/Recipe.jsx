import React from 'react';
import styles from './Recipe.module.css';

export default function Recipe({image,name,diets}){
    return(
        <div className={styles.Content}>
            <h3>{name}</h3>
            <p>Diets:<br />{diets.map(di=>{return(<li>{di}</li>)})}</p>
            <img src={image} alt='imagen no encontrada' width='200px' height='250px'/>
        </div>
    )
}