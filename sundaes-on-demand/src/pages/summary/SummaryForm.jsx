import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );

export const SummaryForm = (props) => {
  const [checkBoxChecked, setcheckBoxChecked] = React.useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
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
