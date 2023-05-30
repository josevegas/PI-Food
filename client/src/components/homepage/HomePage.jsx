import styles from './HomePage.module.css';
import React, { Fragment } from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipes} from '../../actions';
import {Link} from 'react-router-dom'
import Recipe from '../recipe/Recipe';

export default function Home(){
    const dispatch= useDispatch();
    const allRecipes=useSelector((state)=>state.recipes)
    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }
    return (
        <div>
            <Link to='/recipes' className={styles.ButtonHome}>Crear Recetas</Link>
            <h1 className={styles.H1Home}>¡A disfrutar de la comida!</h1>
            <div className={styles.Content}>
                <div className={styles.DivHome}>
                    <button className={styles.ButtonHome} onClick={e=>{handleClick(e)}}>
                        Volver a cargar todas las recetas
                    </button>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Orden Alfabético</p>
                        <select className={styles.OptionHome}>
                            <option value='a-z'>A - Z</option>
                            <option value='z-a'>Z - A</option>
                        </select>
                    </div>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Orden por ID</p>
                        <select className={styles.OptionHome}>
                            <option value='asc'>Ascendente</option>
                            <option value='des'>Descendente</option>
                        </select>
                    </div>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Filtrar por dieta</p>
                        <select className={styles.OptionHome}>
                            <option value="all">Todos</option>
                            <option value="gluten free">Libre de Gluten</option>
                            <option value="lacto ovo vegetarian">Lacto Ovo Vegetariana</option>
                            <option value="dairy free">Libre de Lácteos</option>
                            <option value="vegan">Dieta Vegana</option>
                            <option value="paleolithic">Dieta Paleolítica</option>
                            <option value="primal">Dieta Primitiva</option>
                            <option value="whole 30">Dieta Whole30</option>
                            <option value="pescatarian">Dieta Pescetariana</option>
                            <option value="ketogenic">Dieta Cenogética</option>
                            <option value="fodmap friendly">Dieta FODMAP</option>
                        </select>
                    </div>
                    <div className={styles.SelectHome}>
                    <   p className={styles.PHome}>Filtrar por origen</p>
                        <select className={styles.OptionHome}   >
                            <option value="all">Todos</option>
                            <option value="created">Creados</option>
                            <option value="api">Existentes</option>
                        </select>
                    </div>
                </div>
                <div>
                    {
                        allRecipes?.map(re=>{
                            return (
                                <Fragment>
                                    <Link to={'/home/'+re.id}>
                                        <Recipe name={re.name} image={re.image} diets={re.diets} key={re.id}/>
                                    </Link>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}