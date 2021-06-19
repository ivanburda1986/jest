import { render, fireEvent, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";

test("Initial state: TOCs checkbox is unchecked and the button disabled", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  expect(checkbox).not.toBeChecked();
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checking the TOCs checkbox enables the Confirm-order button and unchecking the checkbox disables the button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
