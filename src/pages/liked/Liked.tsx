import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deteletLikedSong, getfav } from "../../storage/user";
import "./liked.css";
import { AiOutlineDelete } from "react-icons/ai";
export default function Liked() {
  const data = getfav();
  const [liked, setliked] = useState(data);
  const handleDelete = () => {
    let temp = getfav();
    setliked(temp);
  };
  // handle delete
  useEffect(() => {
    const data = getfav();
    setliked(data);
  }, []);
  return (
    <div style={{ padding: "40px 40px" }}>
      <h1 className="text-warning text-uppercase">Liked Songs</h1>
      <div
        className="p-3"
        style={{
          height: "75vh",
          width: "100%",
          margin: "0px auto",
          overflowY: "scroll",
        }}
      >
        {liked.map((x: any) => {
          return (
            <div className="d-flex m-3 p-3 shadow-sm liked">
              <div className="">
                <Link to={`/song/${x.id}`}>
                  <div>
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
                </Link>
              </div>
              <div className="flex-grow-1"></div>
              <div
                className="mt-2"
                onClick={() => {
                  deteletLikedSong(x.id);
                  handleDelete();
                }}
                role="button"
              >
                <AiOutlineDelete color="crimson" size={28} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
