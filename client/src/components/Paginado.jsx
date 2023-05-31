import React from 'react';
import styles from './homepage/HomePage.module.css';

export default function Paginado({recipesPerPage,allRecipes,paginado}){
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(allRecipes/recipesPerPage);i++){
        pageNumbers.push(i);
        console.log(i);
    };
    return(
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers?.map(number=>{
                    return(
                        <li>
                            <a onClick={()=>paginado(number)}>{number}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}