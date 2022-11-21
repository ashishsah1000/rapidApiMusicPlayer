import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getfav } from "../../storage/user";
import "./liked.css";

export default function Liked() {
  const data = getfav();
  const [liked, setliked] = useState(data);
  // handle delete
  useEffect(() => {
    const data = getfav();
    console.log("liked songs are", data);
    setliked(data);
  }, []);
  return (
    <div style={{ padding: "40px 40px" }}>
      <h1 className="text-warning text-uppercase">Liked Songs</h1>
      <div
        className="p-3"
        style={{
          height: "80vh",
          width: "100%",
          margin: "0px auto",
          overflowY: "scroll",
        }}
      >
        {liked.map((x: any) => {
          return (
            <Link to={`/song/${x.id}`}>
              <div className="d-flex m-3 p-3 shadow-sm liked">
                <div className="">
                  <img
                    className="rounded-circle"
                    src={x.coverart}
                    height="50px"
                    width="50px"
                  />
                  <span className="text-white" style={{ marginLeft: "10px" }}>
                    {x.title}
                  </span>
                </div>
                <div className="flex-grow-1"></div>
                <div className="mt-2">Remove</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
