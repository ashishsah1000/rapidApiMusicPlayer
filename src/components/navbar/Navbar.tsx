import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { loadStripe } from "@stripe/stripe-js";
import { useKeycloak } from "@react-keycloak/web";
import { getUser } from "../../storage/user";
import { useSelector } from "react-redux";
import { FcApproval, FcCurrencyExchange } from "react-icons/fc";

export default function Navbar() {
  const user = useSelector((state: any) => state.songs.user);
  const subStatus = useSelector((state: any) => state.songs.subscription);
  console.log(user + " " + subStatus + "from nvabar");
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
        {subStatus == "true" ? (
          <button className="btn " style={{ color: "rgba(222,222,222,.5)" }}>
            <FcApproval size={24} style={{ marginTop: "-4px" }} />
            &nbsp; Premium Member
          </button>
        ) : (
          <button
            onClick={() => {
              redirectCheckout();
            }}
            className="btn "
            style={{ color: "rgba(222,222,222,.5)" }}
          >
            <FcCurrencyExchange size={24} style={{ marginTop: "-4px" }} />
            &nbsp;Buy Premium
          </button>
        )}
        <AiOutlineBell size={24} color="white" />
        &nbsp; &nbsp;
        <button
          disabled={true}
          className="btn btn-dark text-white text-uppercase"
        >
          <AiOutlineUser size={24} /> {user}
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => {
            keycloak.logout();
          }}
          className="btn btn-warning text-uppercase"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
