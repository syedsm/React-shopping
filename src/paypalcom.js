import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; 
function Paypalcheckout(){
    const initialOptions = {
        "client-id": "AVOLcl5pD2Bd8goi4cbuNeXOInC6uHgrmM4gj0o2qCGpN-zE9uzdh1kBhzMWzCvmSesOQomUGsDD18O_",
        currency: "USD",
        intent: "capture",
        // "data-client-token": "abc123xyz==",
    };
    return(
        <>
        <PayPalScriptProvider options={initialOptions}> 

        <PayPalButtons style={{ layout: "vertical" }}  />
        </PayPalScriptProvider> 
        </>
    )

}

export default Paypalcheckout;