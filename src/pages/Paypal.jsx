// paypal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    >
      <PayPalButtons defer={true} style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
};

export default Paypal;
