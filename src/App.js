import React from 'react';
import './App.css';

import Clock from './Clock';
import ClickedMe from './ClickedMe';
import ControlPanel from './ControlPanel';

function App() {
  return (
    <div className="App">
      <h1>Character 1 - 1 hello, react</h1>
      <Clock />
      <hr/>
      <h1>Character 2 - 1 Click Counter  </h1>
      <ClickedMe numb = { 2 }/>
      <hr/>
      <h1>Character 2 - 2 Control Panel  </h1>
      <ControlPanel />
    </div>
  );
}

export default App;
