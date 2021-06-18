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


