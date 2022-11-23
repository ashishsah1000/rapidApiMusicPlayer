import { FcMusic, FcMultipleDevices, FcPaid } from "react-icons/fc";

export default function Subscribe() {
  return (
    <div>
      <div
        className="p-3 "
        style={{
          height: "80vh",
          width: "100%",
          margin: "0px auto",
          overflowY: "scroll",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "400px",
            margin: "0px auto",
          }}
        >
          <div className="m-3 pr-holder" style={{ width: "250px" }}>
            <div
              className="premium-chips pr-stack d-flex justify-content-center align-items-center rounded-circle"
              style={{
                height: "200px",
                width: "200px",
                margin: "0px auto",
                // background: "dodgerblue",
              }}
            >
              <FcMultipleDevices size={196} />
            </div>
            <div className="d-flex p-3 flex-column justify-content-center align-items-center">
              <h5 className="text-uppercase" style={{ color: "teal" }}>
                <b>Multiple Devices</b>
              </h5>
              <p className="small" style={{ textAlign: "center" }}>
                Login upto 5 devices and keep your music at a place...
              </p>
            </div>
          </div>
          <div className="m-3 pr-holder" style={{ width: "250px" }}>
            <div
              className="premium-chips pr-share d-flex justify-content-center align-items-center rounded-circle"
              style={{
                height: "200px",
                width: "200px",
                margin: "0px auto",
                // background: "dodgerblue",
              }}
            >
              <FcPaid size={196} />
            </div>
            <div className="d-flex p-3 flex-column justify-content-center align-items-center">
              <h5 className="text-uppercase">
                <b>Sharing is caring</b>
              </h5>
              <p className="small" style={{ textAlign: "center" }}>
                Share with your freinds and let them know what you are
                listning...
              </p>
            </div>
          </div>
          <div className="m-3 pr-holder" style={{ width: "250px" }}>
            <div
              className="premium-chips d-flex justify-content-center align-items-center rounded-circle"
              style={{
                height: "200px",
                width: "200px",
                margin: "0px auto",
              }}
            >
              <FcMusic size={196} />
            </div>
            <div className="d-flex p-3 flex-column justify-content-center  align-items-center">
              <h5
                className="text-uppercase"
                style={{ color: "rgba(222,22,122,1)" }}
              >
                <b>Play list and more</b>
              </h5>
              <p className="small" style={{ textAlign: "center" }}>
                All your data at a single place never loose them...
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-danger text-underlined text-center">
            <button className="btn " style={{ color: "crimson" }}>
              Do more with premium !
            </button>
          </h3>
          {/* <div
                style={{
                  width: "200px",
                  height: "2px",
                  background: "tomato",
                  margin: "0px auto",
                }}
              ></div> */}
        </div>
      </div>
    </div>
  );
}
