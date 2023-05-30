import styles from './LandingPage.module.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(props){
    return(
        <div>
            <h1 className={styles.H1Landing}>Bienvenido a mi página de Recetas</h1>
            <Link to='/home'>
                <button className={styles.ButtonLanding}>¡A disfrutar!</button>
            </Link>
        </div>
    )
}