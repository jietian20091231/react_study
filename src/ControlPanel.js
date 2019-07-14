import React from 'react';
import Counter from './Counter';

const style = {
    margin: '20px'
};

class ControlPanel extends React.Component {

    constructor( props ) {
        super( props );

        this.onCounterUpdate = this.onCounterUpdate.bind( this );

        this.initValues = [ 0, 10, 20 ];
        const initSum = this.initValues.reduce( ( a, b ) => a + b, 0 );
        this.state = {
            sum: initSum
        };
    }

    onCounterUpdate( newValue, previousValue ) {
        const valueChange = newValue - previousValue;
        this.setState( { sum: this.state.sum + valueChange } );
    }

    render() {
        return (
            <h1>Character 2 - 2</h1>
            <div style={ style }>
                <Counter onUpdate = { this.onCounterUpdate }  value = { this.initValues[ 0 ] } diff = { 10 } />
                <Counter onUpdate = { this.onCounterUpdate }  value = { this.initValues[ 1 ] } diff = { 10 } />
                <Counter onUpdate = { this.onCounterUpdate }  value = { this.initValues[ 2 ] } diff = { 10 } />
                <div>--------------------------</div>
                <div>Total Count: { this.state.sum }</div>
            </div>
        );
    }
}

export default ControlPanel;