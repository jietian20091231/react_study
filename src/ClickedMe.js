import React, { Component } from 'react';
import './css/Butn.css';

class ClickedMe extends React.Component {

    clickMe() {
      this.setState( { numb : this.state.numb + 1 } );
      console.log( this.state.numb );
    };

    constructor( props ) {
      super(props);
      this.state = {
        numb : this.props.numb
      }
      this.clickMe = this.clickMe.bind( this );
    }

    render() {
      return (
        <div>
          <h1>Character 2 - 1</h1>
          <button className = "butn" onClick = { this.clickMe } >Clicked Me : { this.state.numb }</button>
        </div>
      );
    }
  }

  export default ClickedMe;
