import React from 'react';
import styles from './homepage/HomePage.module.css';

export default function Paginado({recipesPerPage,allRecipes,paginado,currentPage}){
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(allRecipes/recipesPerPage);i++){
        pageNumbers.push(i);
        console.log(i);
    };
    return(
        <nav className={styles.paginado}>
            <ul>
                {pageNumbers?.map(number=>{
                    if(number===currentPage){
                        return(
                            <li>
                                <a onClick={()=>paginado(number)} className={styles.active}>{number}</a>
                            </li>
                        )
                    }else{
                        return(
                            <li>
                                <a onClick={()=>paginado(number)}>{number}</a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}