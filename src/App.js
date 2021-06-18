import React from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button 
      style={{backgroundColor: buttonColor}}
      onClick={()=>setButtonColor(newButtonColor)}
      >Change color to {newButtonColor}</button>
    </div>
  );
}

export default App;
