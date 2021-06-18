import React from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  const [disabled, setDisabled] = React.useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';


  return (
    <div className="App">
      <button 
      style={{backgroundColor: buttonColor}}
      onClick={()=>setButtonColor(newButtonColor)}
      disabled={disabled}
      >Change color to {newButtonColor}
      </button>
      <input 
      type="checkbox"
      id="enable-button-checkbox"
      defaultChecked={disabled}
      aria-checked={disabled}
      onChange={(e)=>{
        setDisabled(e.target.checked);
      }}
      />
    </div>
  );
}

export default App;
