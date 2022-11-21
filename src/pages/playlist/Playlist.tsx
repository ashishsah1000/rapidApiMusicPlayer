import React from "react";

export default function Playlist() {
  return (
    <div style={{ padding: "40px 40px" }}>
      <h1 className="text-warning text-uppercase">playlist</h1>
      <div
        className="p-3"
        style={{
          height: "80vh",
          width: "100%",
          margin: "0px auto",
          overflowY: "scroll",
        }}
      >
        <h2>All for premium members</h2>
      </div>
    </div>
  );
}
