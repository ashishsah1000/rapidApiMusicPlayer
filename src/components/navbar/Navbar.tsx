import { AiOutlineBell } from "react-icons/ai";
import { loadStripe } from "@stripe/stripe-js";
import { useKeycloak } from "@react-keycloak/web";
export default function Navbar() {
  let stripePromise: any;

  const { keycloak } = useKeycloak();
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51M6dqXSC1XhVYI5DK2LJMHUAcbtluvmkkIeOmypX5qwrVvzh1afwB0wTUhBhuVZRB8Tq2jDMEX4ObytT1Gwu2iiZ00rCCs5a39"
      );
    }
    return stripePromise;
  };
  const items = {
    price: "price_1M6e6cSC1XhVYI5D9UwdzPgf",
    quantity: 1,
  };
  const checkoutOptions = {
    lineItems: [items],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  // checkout function
  const redirectCheckout = async () => {
    console.log("redirect to checkout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log(error);
  };

  return (
    <nav className="navbar navbar-light  justify-content-between">
      <a className="navbar-brand"></a>
      <div className="p-3">
        {/* <img
          className="rounded-circle"
          src="https://picsum.photos/200/200"
          alt=""
          style={{ height: "50px" }}
        /> */}
        <AiOutlineBell size={24} color="white" />
        &nbsp;
        <button
          onClick={() => {
            redirectCheckout();
          }}
          className="btn text-white"
        >
          Buy Premium
        </button>
        &nbsp;
        <button
          onClick={() => {
            keycloak.logout();
          }}
          className="btn btn-warning"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
