import { useEffect, useState } from "react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {postRecipes,getDiets} from "../../actions/index";
import { useDispatch,useSelector } from "react-redux";
import { validation } from "./validation";

export default function FormPage(){
    const dispatch=useDispatch();
    const history=useHistory();
    const diets=useSelector(state=>state.diets);
    const [input,setInput]=useState({
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        stepToStep: [],
        diets: [],
    });
    const [errors,setErrors]=useState({})
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setInput({
            ...input,
            [name]: value,
        })
        setErrors(validation({
            ...input,
            [name]: value,
        }))
    }
    const handleCheck=(e)=>{
        setInput({
            ...input,
            diets: [...input.diets,e.target.value],
        })
    }
    const handleTextArea=(e)=>{
        let arr=e.target.value.split('.')
        setInput({
            ...input,
            stepToStep: arr,
        })
        setErrors(validation({
            ...input,
            stepToStep: arr,
        }))
    }
    console.log(input);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input);
        dispatch(postRecipes(input));
        alert(`Receta de ${input.name} creada`);
        setInput({
            name: "",
            image: "",
            summary: "",
            healthScore: "",
            stepToStep: [],
            diets: [],
        });
        history.push('/home');
    }
    useEffect(()=>{
        dispatch(getDiets());
    },[]);

    return(
        <div>
            <Link to="/home"><button>Volver</button></Link>
            <h1>¡Crea tu receta!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Nombre</label>
                    <input type='text' value={input.name} name='name' onChange={handleChange} />
                    {errors.name?(
                        <p>{errors.name}</p>
                    ):null}
                </div>
                <div>
                    <label>Resumen de la Receta</label>
                    <input type='text' value={input.summary} name='summary' onChange={handleChange} />
                    {errors.summary?(
                        <p>{errors.summary}</p>
                    ):null}
                </div>
                <div>
                    <label>Score Saludable</label>
                    <input type='number' value={input.healthScore} name='healthScore' onChange={handleChange} />
                    {errors.healthScore?(
                        <p>{errors.healthScore}</p>
                    ):null}
                </div>
                <div>
                    <label>Imagen</label>
                    <input type='text' value={input.image} name='image' onChange={handleChange} />
                    {errors.image?(
                        <p>{errors.image}</p>
                    ):null}
                </div>
                <div>
                    <label>Tipo de Dietas</label>
                    <div>
                        {diets.map(di=>{
                            return(<label><input type='checkbox' name={di.name} value={di.name} onChange={e=>handleCheck(e)}/>{di.name}</label>)
                        })}
                    </div>
                </div>
                <div>
                    <label>Instrucciones</label>
                    <textarea type='text' value={input.stepToStep} name='stepToStep' onChange={(e)=>handleTextArea(e)} />
                    {errors.stepToStep?(
                        <p>{errors.stepToStep}</p>
                    ):null}
                </div>
                <button type='submit'>Crear Receta</button>
            </form>
        </div>
    )
}