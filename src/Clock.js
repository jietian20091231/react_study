import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
      return (
        <div>
          <h1>Character 1 - 1</h1>
          <h2>Welcome to React World, {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  export default Clock;
