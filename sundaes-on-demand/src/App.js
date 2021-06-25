import React from "react";
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

import { SummaryForm } from "../src/pages/summary/SummaryForm";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/*Summary page and Entry page need the provider*/}
        <OrderEntry />
      </OrderDetailsProvider>
      {/* Confirmation page does not need the provider */}
    </Container>
  );
}

export default App;
