import "./music.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeBackground } from "../../features/songs";
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
  const dispatch = useDispatch();
  return (
    <div
      className="music-album"
      style={{ width: "300px", height: 300, overflow: "hidden" }}
      onMouseEnter={() => {
        // dispatch(changeBackground(img));
      }}
    >
      <div
        className="music-image"
        style={{
          height: 300,
          width: 300,
          background: `url(${img})`,
          backgroundSize: "cover",
          textDecoration: "none",
        }}
      ></div>
      <div className="hover-music p-3">
        <h6
          className="text-white flex-grow-1 text-uppercase mt-1 "
          style={{
            textDecoration: "none",
            width: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h6>
        <span role="button">
          <AiFillPlayCircle color="white" size={36} />
        </span>
      </div>
    </div>
  );
}
