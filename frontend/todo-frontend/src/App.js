
import './App.css';
import { useState } from 'react';
import List from './components/Lists';
import EditablePage from './components/EditablePage';
function App() {
  return (
    <div className="App">
      <List />
      <EditablePage />
    </div>
  );
}

export default App;
