import React from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  const [disabled, setDisabled] = React.useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick={()=>setButtonColor(newButtonColor)}
      disabled={disabled}
      >Change color to {newButtonColor}
      </button>
      <input 
      type="checkbox"
      id="disable-button-checkbox"
      defaultChecked={disabled}
      aria-checked={disabled}
      onChange={(e)=>{
        setDisabled(e.target.checked);
      }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
