import React , { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {    
        const updatedIngredients = {
            ...this.state.ingredients
        };     
        updatedIngredients[type] = updatedIngredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];      
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredients[type] - 1
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]<=0 ;
        }
        return(
            <Aux>
                <Burger ingredients={ this.state.ingredients }/>
                <Buildcontrols 
                    ingredientsAdded= { this.addIngredientHandler } 
                    ingredientsRemoved= { this.removeIngredientHandler }
                    disabled = { disabledInfo }   
                />
            </Aux>
        );
    };
};

export default BurgerBuilder;