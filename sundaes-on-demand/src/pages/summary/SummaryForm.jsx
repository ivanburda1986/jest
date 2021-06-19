import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SummaryForm = (props) => {
  const [checkBoxChecked, setcheckBoxChecked] = React.useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <div>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check type="checkbox" checked={checkBoxChecked} onChange={(e) => setcheckBoxChecked(e.target.checked)} label={checkboxLabel} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!checkBoxChecked}>
          Confirm order
        </Button>
      </Form>
    </div>
  );
};
