import React from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = React.useState('MediumVioletRed');
  const [disabled, setDisabled] = React.useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor, color: '#fff'}}
      onClick={()=>setButtonColor(newButtonColor)}
      disabled={disabled}
      >Change color to {replaceCamelWithSpaces(newButtonColor)}
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
