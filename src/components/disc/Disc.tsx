import React from "react";
import "./disc.css";

interface disc {
  image?: string;
}

export default function Disc({
  image = "https://images.pexels.com/photos/732629/pexels-photo-732629.jpeg",
}: disc) {
  return (
    <div className="cd" style={{ background: `url(${image})` }}>
      <img
        className="rounded-circle"
        src={image}
        height="126px"
        width="126px"
      />
    </div>
  );
}
