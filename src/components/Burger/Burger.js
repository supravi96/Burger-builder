import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey=>{            
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {            
            return arr.concat(el);
        }, []);

    if(!transformedIngredient.length){
        transformedIngredient = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={ styles.Burger }>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default burger;