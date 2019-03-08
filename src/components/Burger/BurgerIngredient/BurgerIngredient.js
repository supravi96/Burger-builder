import React from 'react';
import styles from './BurgerIngredient.module.css';

const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch ( props.type ) {
        case ('bread-bottom'):
            ingredient = <div className={ styles.BreadBottom }></div>
            break;
        case ('bread-top'):
            ingredient = (
                    <div className={ styles.BreadTop }>
                        <div className={ styles.Seeds1}></div>
                        <div className={ styles.Seeds2}></div>
                    </div>
                );
            break;
        case ('Cheese'):
            ingredient = <div className={ styles.Cheese}></div>;
            break;
        case ('Salad'):
            ingredient = <div className={ styles.Salad}></div>;
            break;
        case ('Bacon'):
            ingredient = <div className={ styles.Bacon}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
};

export default burgerIngredient;