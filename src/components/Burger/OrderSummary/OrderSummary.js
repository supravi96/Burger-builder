import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            let k = '_'+igKey
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> 
                );
        } );          

    return (
        <Aux>
            <h3>Your Modal</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={ props.purchasedCancelled }>CANCEL</Button>
            <Button btnType='Success' clicked={ props.purchaseContinues }>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;