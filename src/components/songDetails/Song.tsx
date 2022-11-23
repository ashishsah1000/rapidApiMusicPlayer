import songInfo from "../../data/song.json";
import recommend from "../../data/recommendArtist.json";
import Music from "../music/Music";
import { useEffect, useState } from "react";
import Disc from "../disc/Disc";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsHeart, BsHeartFill, BsMusicNoteList } from "react-icons/bs";
import { changeBackground } from "../../features/songs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "axios";
import { addToFav, deteletLikedSong, getfav } from "../../storage/user";
import musicData from "../../data/INMusic.json";
import AddPlaylist from "../modal/AddToPlaylist";

interface song {
  coverart?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}
export default function Song() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [title, settitle] = useState<string>("Title of the song");
  const [subtitle, setsubtitle] = useState<string>("Details of ths song");
  const [thumbg, setthumbg] = useState<string>(
    "https://i.picsum.photos/id/867/900/900.jpg?hmac=KAL-oRCmobR5JAZDtyUXP5pMivMBu8jvqh-_2Ul_UAc"
  );
  const [recom, setRecom] = useState([]);
  const subStatus = useSelector((state: any) => state.songs.subscription);
  // function to fetch the song detthuails
  const [liked, setLiked] = useState(false);
  const getSongInfo = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/songs/get-details",
      params: { key: id, locale: "en-US" },
      headers: {
        "X-RapidAPI-Key": "ddcee9800emshe14682e9c7cdd34p1d1fe7jsnacdec73e9c76",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("Wegot the responde", response.data);
        settitle(response.data.title);
        setsubtitle(response.data.subtitle);
        if (typeof response?.data?.images?.coverart != undefined) {
          console.log(response?.data?.images?.coverart);
          setthumbg(response?.data?.images?.coverart);
        } else {
          setthumbg(
            "https://i.picsum.photos/id/867/900/900.jpg?hmac=KAL-oRCmobR5JAZDtyUXP5pMivMBu8jvqh-_2Ul_UAc"
          );
        }

        if (typeof response?.data?.images?.coverarthq != undefined)
          dispatch(changeBackground(response?.data?.images?.coverarthq));
        else {
          dispatch(
            changeBackground(
              "https://i.picsum.photos/id/867/900/900.jpg?hmac=KAL-oRCmobR5JAZDtyUXP5pMivMBu8jvqh-_2Ul_UAc"
            )
          );
        }
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
        "X-RapidAPI-Key": "ddcee9800emshe14682e9c7cdd34p1d1fe7jsnacdec73e9c76",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (Object.keys(response.data).length === 0) {
          let tracks: any = musicData.tracks;
          setRecom(tracks);
        } else setRecom(response.data.tracks);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleAddToFav = () => {
    const favSong: song = { id, coverart: thumbg, title, subtitle };
    addToFav(favSong);
  };
  const [show, setshow] = useState<boolean>(false);
  const callbackClose = () => {
    setshow(false);
  };

  const dispatch = useDispatch();
  let stop: number = 0;
  const curentSong: song = { id, coverart: thumbg, title, subtitle };

  useEffect(() => {
    if (stop == 0) {
      // getSongInfo();
      stop++;
    }
    var likedSongs: song[] = getfav();
    var check: song[] = likedSongs.filter((x) => {
      if (x.id == id) return true;
      else return false;
    });
    if (check.length > 0) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loading />
        <AddPlaylist
          song={curentSong}
          show={show}
          callbackClose={callbackClose}
        />
      </div>
    );
  }
  return (
    <div>
      <AddPlaylist
        song={curentSong}
        show={show}
        callbackClose={callbackClose}
      />

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
                maxWidth: "500px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {liked ? (
                <span
                  role="button"
                  // style={{ position: "relative", top: -10, left: 10 }}
                  onClick={() => {
                    deteletLikedSong(id!);
                    setLiked(false);
                  }}
                >
                  <BsHeartFill color="tomato" size={36} />
                  &nbsp;
                </span>
              ) : (
                <span
                  role="button"
                  // style={{ position: "relative", top: -10, left: 10 }}
                  onClick={() => {
                    handleAddToFav();
                    setLiked(true);
                  }}
                >
                  <BsHeart size={36} /> &nbsp;
                </span>
              )}
              {title}
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
            {subStatus == "true" ? (
              <span
                role="button"
                className="rounded-circle"
                style={{
                  height: "100px",
                  background: "",
                  padding: "18px 18px",
                }}
                onClick={() => {
                  setshow(true);
                }}
              >
                <BsMusicNoteList color="rgba(222,222,222,.4)" size={32} />
              </span>
            ) : (
              ""
            )}

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
                    <Music
                      img={
                        x.images?.coverart ??
                        "https://i.picsum.photos/id/867/900/900.jpg?hmac=KAL-oRCmobR5JAZDtyUXP5pMivMBu8jvqh-_2Ul_UAc"
                      }
                      title={x.title}
                    />
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
