import React , { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
                <Aux>
                    <Toolbar drawertoggleClicked= { this.sideDrawerToggleHandler }/>
                    <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler }/>
                    <main className={ styles.Content }>
                        {this.props.children}
                    </main>
                </Aux>
        );
    }
};

export default Layout;