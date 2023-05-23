import styles from './LandingPage.module.css';

export default function LandingPage(props){
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(true);
      };
    return(
        <div>
            <h1>Bienvenido a mi página de Recetas</h1>
            <button type='submit'>¡A disfrutar!</button>
        </div>
    )
}