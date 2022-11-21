import songInfo from "../../data/song.json";
import recommend from "../../data/recommendArtist.json";
import Music from "../music/Music";
import { useEffect, useState } from "react";
import Disc from "../disc/Disc";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsHeart, BsHeartFill, BsMusicNoteList } from "react-icons/bs";
import { changeBackground } from "../../features/songs";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "axios";

// interface song {
//   bgimg?: string;
//   thumbimg?: string;
//   details?: string;
//   //   id?: number;
//   artistId?: string;
// }
export default function Song() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [title, settitle] = useState<string>("Title of the song");
  const [subtitle, setsubtitle] = useState<string>("Details of ths song");
  const [thumbg, setthumbg] = useState<string>("Link of image");
  const [recom, setRecom] = useState([]);
  // function to fetch the song detthuails
  const getSongInfo = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/songs/get-details",
      params: { key: id, locale: "en-US" },
      headers: {
        "X-RapidAPI-Key": "4d36d0690amsha9fb495c3428903p1e73a3jsnbdf92e7f3487",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("Wegot the responde", response.data);
        settitle(response.data.title);
        setsubtitle(response.data.subtitle);
        setthumbg(response.data.images.coverart);
        dispatch(changeBackground(response.data.images.coverarthq));
        setLoading(false);
        getRecommendList();
        console.log(title, subtitle, thumbg);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getRecommendList = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/songs/list-recommendations",
      params: { key: id, locale: "en-US" },
      headers: {
        "X-RapidAPI-Key": "4d36d0690amsha9fb495c3428903p1e73a3jsnbdf92e7f3487",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRecom(response.data.tracks);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //   console.log(songInfo);

  const dispatch = useDispatch();
  let stop: number = 0;
  useEffect(() => {
    if (stop == 0) {
      //   getSongInfo();
      stop++;
    }
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div style={{ padding: "30px 30px" }}>
        <div className="song-header d-flex">
          <div>
            <Disc image={thumbg} />
          </div>
          <div className="flex-grow-1 m-3">
            <h1
              className="text-uppercase text-white font-weight-bold"
              style={{
                position: "relative",
                top: 0,
                left: 20,
                fontWeight: 200,
              }}
            >
              {title}
              <span
                role="button"
                style={{ position: "relative", top: -10, left: 10 }}
              >
                <BsHeart size={24} />
              </span>
            </h1>
            <h2
              style={{
                position: "relative",
                top: 0,
                left: 20,
                fontWeight: 200,
              }}
            >
              {subtitle}
            </h2>
          </div>
          <div className="mt-3">
            <span
              role="button"
              className="rounded-circle"
              style={{ height: "100px", background: "", padding: "18px 18px" }}
            >
              <BsMusicNoteList color="dodgerblue" size={32} />
            </span>
            <span role="button">
              <AiFillPlayCircle color="teal" size={64} />
            </span>
          </div>
        </div>
      </div>
      {recom?.length > 0 ? (
        <div style={{ width: "80vw", overflow: "scroll" }}>
          <div
            className="d-flex "
            style={{
              background: "",
              padding: "40px 40px",
              width: 350 * recommend.tracks?.length,
            }}
          >
            {recom?.map((x: any) => {
              return (
                <div className="m-3" key={x.key} style={{ cursor: "pointer" }}>
                  <Link to={`/song/${x.key}`}>
                    <Music img={x.images?.coverart} title={x.title} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
