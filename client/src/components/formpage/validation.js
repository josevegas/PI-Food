const minScore=0;
const maxScore=100;

export function validation(input){
    let errors={};
    if(!input.name){
        errors.name="Se requiere de un nombre para tu receta"
    }
    if(!input.image){
        errors.image="Se requiere una imágen para tu receta"
    }
    if(!input.summary){
        errors.summary="Describe tu receta para hacerla más interesante"
    }
    if(!input.healthScore){
        errors.healthScore="Indícanos cuán saludable es tu receta"
    }
    if(input.healthScore<minScore||maxScore<input.healthScore){
        errors.healthScore=`El score debe estar entre ${minScore} y ${maxScore}`
    }
    if(!input.stepToStep){
        errors.stepToStep="¡No olvides poner los pasos de tu receta!"
    }
    if(!input.diets){
        errors.diets="¡Cuidado! Has olvidado indicar el tipo de dieta de tu receta"
    }
    return errors;
}