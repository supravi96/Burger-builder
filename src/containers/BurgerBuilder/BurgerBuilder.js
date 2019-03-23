import React , { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {        
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {        
        this.setState({purchasing: false});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {            
            return ingredients[key];
        })
        .reduce((sum,el)=>{            
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]<=0 ;
        }
        return(
            <>
                <Modal show={this.state.purchasing} modalClosed = { this.purchaseCancelHandler}>
                    <OrderSummary 
                        price = { this.state.totalPrice }
                        ingredients = { this.state.ingredients }
                        purchasedCancelled = { this.purchaseCancelHandler}
                        purchaseContinues = { this.purchaseContinueHandler }
                    />
                </Modal>
                <Burger ingredients={ this.state.ingredients }/>
                <Buildcontrols 
                    price = {this.state.totalPrice}
                    ingredientsAdded= { this.addIngredientHandler } 
                    ingredientsRemoved= { this.removeIngredientHandler }
                    disabled = { disabledInfo }   
                    purchasable = {this.state.purchasable}
                    ordered= { this.purchaseHandler }
                />
            </>
        );
    };
};

export default BurgerBuilder;