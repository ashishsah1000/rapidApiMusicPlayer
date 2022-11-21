import { Link } from "react-router-dom";
import Music from "../music/Music";
export default function MusicTiles({ musicArray = [] }) {
  console.log("music array is", musicArray);
  return (
    <div style={{ width: "80vw", overflow: "scroll" }}>
      <div
        className="d-flex "
        style={{
          background: "",
          padding: "40px 40px",
          width: 350 * musicArray?.length,
        }}
      >
        {musicArray?.map((x: any) => {
          return (
            <div className="m-3" key={x.track.key} style={{ cursor: "pointer" }}>
              <Link to={`/song/${x.track.key}`}>
                <Music img={x.track.images?.coverart} title={x.track.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
