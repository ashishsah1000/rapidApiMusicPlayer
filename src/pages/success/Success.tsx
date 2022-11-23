import { useEffect } from "react";
import { FcPaid, FcGlobe } from "react-icons/fc";
import { addSubscriber, setSubscriptionStaus } from "../../storage/subscribe";
import { getUser } from "../../storage/user";
export default function Success() {
  setSubscriptionStaus();
  addSubscriber(getUser());
  useEffect(() => {}, []);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "400px" }}
    >
      <div className="d-flex flex-column justify-content-center">
        {/* <img
          height="300px"
          src={
            "https://res.cloudinary.com/dxir7knlo/image/upload/v1669217670/success_loynmh.png"
          }
        /> */}
        <FcGlobe size={228} />
        {/* <h1>Welcome Abroad</h1> */}
      </div>
      <div className="d-flex flex-column justify-items-center">
        <span>
          {" "}
          <FcPaid size={50} />{" "}
          <span
            style={{
              color: "rgba(22,222,22,.4)",
              position: "relative",
              top: "4px",
            }}
          >
            Added to basket
          </span>
          &nbsp;
        </span>
        <br />
        <button className="btn btn-warning ml-3">Go to dashboard</button>
      </div>
    </div>
  );
}
