import { useEffect, useState } from "react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {postRecipes,getDiets} from "../../actions/index";
import { useDispatch,useSelector } from "react-redux";
import { validation } from "./validation";
import style from './FormPage.module.css';

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
        let arr=e.target.value.split(',')
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
            <Link to="/home"><button className={style.ButtonFP}>Volver</button></Link>
            <h1 className={style.H1FP}>¡Crea tu receta!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className={style.DivFP}>
                    <label className={style.LabelFP}>Nombre</label>
                    <input className={style.InputFP} type='text' value={input.name} name='name' onChange={handleChange} />
                    {errors.name?(
                        <p className={style.PFP}>{errors.name}</p>
                    ):null}
                </div>
                <div className={style.DivFP}>
                    <label className={style.LabelFP}>Resumen de la Receta</label>
                    <input className={style.InputFP} type='text' value={input.summary} name='summary' onChange={handleChange} />
                    {errors.summary?(
                        <p className={style.PFP}>{errors.summary}</p>
                    ):null}
                </div>
                <div className={style.DivFP}>
                    <label className={style.LabelFP}>Score Saludable</label>
                    <input className={style.InputFP} type='number' value={input.healthScore} name='healthScore' onChange={handleChange} />
                    {errors.healthScore?(
                        <p className={style.PFP}>{errors.healthScore}</p>
                    ):null}
                </div>
                <div className={style.DivFP}>
                    <label className={style.LabelFP}>Imagen</label>
                    <input className={style.InputFP} type='text' value={input.image} name='image' onChange={handleChange} />
                    {errors.image?(
                        <p className={style.PFP}>{errors.image}</p>
                    ):null}
                </div>
                <div className={style.DivFP}>
                    <label className={style.LabelFP}>Tipo de Dietas</label>
                    <div className={style.DivOp}>
                        {diets.map(di=>{
                            return(<div className={style.LabelFP}><label><input type='checkbox' name={di.name} value={di.name} onChange={e=>handleCheck(e)}/>{di.name}</label></div>)
                        })}
                    </div>
                </div>
                <div className={style.DivFP}>
                    <label className={style.LabelOFP}>Instrucciones</label>
                    <textarea className={style.AreaFP} type='text' value={input.stepToStep} name='stepToStep' onChange={(e)=>handleTextArea(e)} />
                    {errors.stepToStep?(
                        <p className={style.PFP}>{errors.stepToStep}</p>
                    ):null}
                </div>
                <button type='submit' className={style.ButtonFP} >Crear Receta</button>
            
            </form>
        </div>
    )
}