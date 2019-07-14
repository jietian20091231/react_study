import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStype = {
    margin: '10px'
};

class Counter extends React.Component {

    constructor( props ) {
        console.log( props );
        super( props );

        this.onClickIncrementButton = this.onClickIncrementButton.bind( this );
        this.onClickDecrementButton = this.onClickDecrementButton.bind( this );

        this.state = {
            value: props.value
        }
    }

    updateCount( isIncrement ) {
        const previousValue = this.state.value;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        console.log( "min = " + this.props.value + ", max = " + ( this.props.value  + this.props.diff ) + ", newValue = " + newValue );
        if( newValue >= this.props.value && newValue <= ( this.props.value + this.props.diff ) ) {
            this.setState( { value : newValue } );
            this.props.onUpdate( newValue, previousValue );
        }
    }
    
    onClickIncrementButton() {
        this.updateCount( true );
    }

    onClickDecrementButton() {
        this.updateCount( false );
    }

    render() {
        return (
            <div>
                <button style = { buttonStype } onClick = { this.onClickIncrementButton } >+</button>
                <button style = { buttonStype } onClick = { this.onClickDecrementButton } >-</button>
                <span> { this.state.value } </span>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    value: 0,
    onUpdate: f => f
};

export default Counter;