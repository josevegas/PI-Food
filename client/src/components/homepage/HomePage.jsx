import styles from './HomePage.module.css';
import React, { Fragment } from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterRecipesByDiet, filterRecipesByOrigin, getRecipes, orderById, orderByName} from '../../actions';
import {Link} from 'react-router-dom'
import Recipe from '../recipe/Recipe';
import Paginado from '../Paginado';
import SearchBar from '../searchbar/SearchBar';

export default function Home(){
    const dispatch= useDispatch();
    const allRecipes= useSelector((state)=>state.recipes);
    const [currentPage,setCurrentPage]=useState(1);
    const [recipesPerPage,setRecipesPerPage]=useState(9);
    const [orden,setOrden]=useState();
    const indexCut= currentPage * recipesPerPage;
    const indexFirstRecipe= indexCut - recipesPerPage;
    const currentRecipes= allRecipes.slice(indexFirstRecipe,indexCut);
    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber);
    };
    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }
    function handleFilterRecipesDiet(e){
        dispatch(filterRecipesByDiet(e.target.value))
        setCurrentPage(1);
    }
    function handleFilterRecipesOrigin(e){
        dispatch(filterRecipesByOrigin(e.target.value))
        setCurrentPage(1);
    }
    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleOrderById(e){
        e.preventDefault();
        dispatch(orderById(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    return (
        <div>
            <Link to='/recipes' className={styles.ButtonHome}>Crear Recetas</Link>
            <h1 className={styles.H1Home}>¡A disfrutar de la comida!</h1>
            <div className={styles.Content}>
                <div className={styles.DivHome}>
                    <button className={styles.ButtonHome} onClick={e=>handleClick(e)}>
                        Volver a cargar todas las recetas
                    </button>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Ordenar Por Nombre</p>
                        <select className={styles.OptionHome} onChange={handleOrderByName} >
                            <option value='a-z'>A - Z</option>
                            <option value='z-a'>Z - A</option>
                        </select>
                    </div>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Ordenar por ID</p>
                        <select className={styles.OptionHome} onChange={handleOrderById} >
                            <option value='asc'>Ascendente</option>
                            <option value='des'>Descendente</option>
                        </select>
                    </div>
                    <div className={styles.SelectHome}>
                        <p className={styles.PHome}>Filtrar por dieta</p>
                        <select className={styles.OptionHome} onChange={handleFilterRecipesDiet}>
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
                        <select className={styles.OptionHome} onChange={handleFilterRecipesOrigin}  >
                            <option value="all">Todos</option>
                            <option value="created">Creados</option>
                            <option value="api">Existentes</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Paginado recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginado={paginado} currentPage={currentPage} />
                    <SearchBar />
                    {
                        currentRecipes?.map(re=>{
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