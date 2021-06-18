import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color", () => {
  render(<App/>);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change color to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});


test("button turns blue when clicked and gets the correct title", ()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change color to blue'});

  // click the button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  // expect the button to have the title saying clicking it will change the color to red
  expect(colorButton.textContent).toBe('Change color to red');

});

test("initial conditions of the checkbox",()=>{
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change color to blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked(); 
});

test("ticked checkbox disables the button and unticked enables",()=>{
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: 'Change color to blue'});

  // check that the button becomes disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // check that the button becomes enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled(); 
})