import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has the correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns MidnightBlue when clicked and gets the correct title", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });

  // click the button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button to have the title saying clicking it will change the color to MediumVioletRed
  expect(colorButton).toHaveTextContent("Change color to Medium Violet Red");
});

test("initial conditions of the checkbox", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("ticked checkbox disables the button and unticked enables", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });

  // check that the button becomes disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // check that the button becomes enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("MediumVioletRed button turns grey if deactivated", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("MidnightBlue button turns grey if deactivated", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change color to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capita letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
