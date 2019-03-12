import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={ styles.BuildControls }>
    <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map((ctrl)=>{            
            return <BuildControl 
                                key={ctrl.label} 
                                label={ctrl.label} 
                                added= { props.ingredientsAdded.bind(this,ctrl.type) }
                                removed= { props.ingredientsRemoved.bind(this,ctrl.type)} 
                                disabled = { props.disabled[ctrl.type]}
                    />
        })}
        <button 
            className={ styles.OrderButton }
            disabled= {!props.purchasable}
            onClick= { props.ordered }
        >ORDER NOW</button>
    </div>
);

export default buildControls;