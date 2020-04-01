import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            // Se puede usar Fragment o el componente Auxiliary que hemos creado para evitar tener 
            // que usar un div encapsulando la respuesta, ya que con jxl se debe devolver un único objeto
            // <Fragment>
            <WithClass classes={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" ref={this.inputElementRef} onChange={this.props.changed} defaultValue={this.props.name}/>
            </WithClass>
        )
        // </Fragment>
    }
}

// Esto no es obligatorio pero viene bien para delimitar los props de un componente.
// Incluye validación que salta a nivel de consola si el tipo de un prop no coincide con el esperado.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.any,
    changed: PropTypes.func
};

export default Person;