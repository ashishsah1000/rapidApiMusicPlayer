import { useEffect } from "react";
import musicData from "../../data/INMusic.json";
import { Link } from "react-router-dom";
// import musicData from "../../data/music.json";
import "./toplist.css";
import Music from "../music/Music";
import { selectSong } from "../../features/songs";
import { useDispatch } from "react-redux";
export default function TopList() {
  console.log(musicData, musicData);
  let tracks = musicData.tracks;
  // console.log(200 * tracks.length + "px");
  useEffect(() => {}, []);
  const dispatch = useDispatch();
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
              <Link to={`/song/${x.key}`}>
                <div
                  className="m-3"
                  key={x.key}
                  onClick={() => {
                    console.log("was dispatched");
                    dispatch(selectSong(x));
                  }}
                >
                  <Music img={x.images?.coverart} title={x.title} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
