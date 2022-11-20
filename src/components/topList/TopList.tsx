import { useEffect } from "react";
import musicData from "../../data/music.json";
import "./toplist.css";
import Music from "../music/Music";
export default function TopList() {
  console.log(musicData.tracks);
  let tracks = musicData.tracks;
  console.log(200 * tracks.length + "px");
  useEffect(() => {}, []);

  return (
    <div className="p-3 d-flex flex-column">
      <h1 className="text-uppercase text-white">featured </h1>
      <div
        className="music-container"
        style={{
          overflowX: "auto",
          width: "80vw",
        }}
      >
        <div
          className="mt-3 "
          style={{
            display: "flex",
            minHeight: 200,
            overflow: "auto",
            width: `${350 * tracks.length}px`,
          }}
        >
          {tracks.map((x, i) => {
            return (
              <div className="m-3">
                <Music img={x.images.coverart} title={x.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
