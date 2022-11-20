import "./music.css";
import { AiFillPlayCircle } from "react-icons/ai";
interface music {
  img?: string;
  title?: string;
  details?: string;
}
export default function Music({
  img = "https://picsum.photos/200/200",
  title = "new Title",
  details = "we are adding the details here",
}: music) {
  return (
    <div
      className="music-album"
      style={{ width: "200px", height: 200, overflow: "hidden" }}
    >
      <div
        className="music-image"
        style={{
          height: 200,
          width: 200,
          background: `url(${img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="hover-music p-3">
        <h6 className="text-white flex-grow-1 text-uppercase mt-1">{title}</h6>
        <span role="button">
          hellw
          <AiFillPlayCircle color="white" size={36} />
        </span>
      </div>
    </div>
  );
}
