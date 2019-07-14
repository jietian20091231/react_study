import React from 'react';
import './App.css';

import Clock from './Clock';
import ClickedMe from './ClickedMe';
import ControlPanel from './ControlPanel';

function App() {
  return (
    <div className="App">
      <Clock />
      <hr/>
      <ClickedMe numb = { 2 }/>
      <hr/>
      <ControlPanel />
    </div>
  );
}

export default App;
