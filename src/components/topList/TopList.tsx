import { useEffect, useState } from "react";
import musicData from "../../data/INMusic.json";
import { Link } from "react-router-dom";
import MusicTiles from "../musicsList/MusicTiles";
// import musicData from "../../data/music.json";
import "./toplist.css";
import Music from "../music/Music";
import { selectSong } from "../../features/songs";
import { useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import { recommendEnglishSong } from "../../axios/music";
export default function TopList() {
  // data from a local stored file
  // console.log(musicData, musicData)
  // if there is blank response use this local stored json data
  let tracks = musicData.tracks;
  // console.log(200 * tracks.length + "px");
  const [popSong, setpopSong] = useState<{}[]>([]);
  const [engsong, setengsong] = useState<{}[]>([]);
  const [indSong, setindsong] = useState<{}[]>([]);

  const getEnglishSong = async () => {
    const res = await recommendEnglishSong("ip-city-chart-5128581");
    console.log("response from eng song in top tracks", res);
    setengsong(res);
  };
  const getHindiSong = async () => {
    const res = await recommendEnglishSong("ip-city-chart-1273294");
    console.log("response from eng song in top tracks", res);
    setindsong(res);
  };
  const getPopSongs = async () => {
    const res = await recommendEnglishSong("genre-global-chart-1");
    console.log("response from eng song in top tracks", res);
    setpopSong(res);
  };
  var count: number = 0;
  useEffect(() => {
    if (count == 0) {
      getEnglishSong();
      getHindiSong();
      getPopSongs();
      // console.log("response from eng song in top tracks", res);

      count++;
    }
  }, []);
  const dispatch = useDispatch();
  return (
    <div
      className="p-3 "
      style={{
        width: "100%",
        height: "90vh",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <h1 className="text-uppercase text-white">featured </h1>
      {popSong.length > 0 ? (
        <>
          <div
            className="music-container"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              width: "80vw",
              height: "350px",
            }}
          >
            <div
              className="mt-3 top-tracks"
              style={{
                display: "flex",
                height: 350,
                overflow: "auto",
                overflowY: "hidden",
                width: `${350 * tracks.length}px`,
              }}
            >
              {popSong.map((x: any, i) => {
                return (
                  <Link to={`/song/${x.key}`}>
                    <div
                      className="m-3 top-tracks-list"
                      key={x.key}
                      onClick={() => {
                        dispatch(selectSong(x));
                      }}
                    >
                      <Music
                        img={
                          x.images?.coverart ?? "https://picsum.photos/900/900"
                        }
                        title={x.title}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        // <div
        //   className="music-container"
        //   style={{
        //     overflowX: "auto",
        //     overflowY: "hidden",
        //     width: "80vw",
        //     height: "350px",
        //   }}
        // >
        //   <div
        //     className="mt-3 top-tracks"
        //     style={{
        //       display: "flex",
        //       height: 350,
        //       overflow: "auto",
        //       overflowY: "hidden",
        //       width: `${350 * tracks.length}px`,
        //     }}
        //   >
        //     {tracks.map((x, i) => {
        //       return (
        //         <Link to={`/song/${x.key}`} key={x.key}>
        //           <div
        //             className="m-3 top-tracks-list"
        //             key={x.key}
        //             onClick={() => {
        //               dispatch(selectSong(x));
        //             }}
        //           >
        //             <Music img={x.images?.coverart} title={x.title} />
        //           </div>
        //         </Link>
        //       );
        //     })}
        //   </div>
        // </div>
        <Loading />
      )}
      <div>
        <h1 className="text-uppercase text-white mt-3">english </h1>

        {engsong.length > 0 ? (
          <div
            className="music-container"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              width: "80vw",
              height: "350px",
            }}
          >
            <div
              className="mt-3 top-tracks"
              style={{
                display: "flex",
                height: 350,
                overflow: "auto",
                overflowY: "hidden",
                width: `${350 * tracks.length}px`,
              }}
            >
              {engsong.map((x: any, i) => {
                return (
                  <Link to={`/song/${x.key}`}>
                    <div
                      className="m-3 top-tracks-list"
                      key={x.key}
                      onClick={() => {
                        dispatch(selectSong(x));
                      }}
                    >
                      <Music
                        img={
                          x.images?.coverart ?? "https://picsum.photos/900/900"
                        }
                        title={x.title}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          // <h1>Recived</h1>
          <Loading />
        )}
      </div>
      <div>
        <h1 className="text-uppercase text-white mt-3">hindi </h1>

        {indSong.length > 0 ? (
          <div
            className="music-container"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              width: "80vw",
              height: "350px",
            }}
          >
            <div
              className="mt-3 top-tracks"
              style={{
                display: "flex",
                height: 350,
                overflow: "auto",
                overflowY: "hidden",
                width: `${350 * tracks.length}px`,
              }}
            >
              {indSong.map((x: any, i) => {
                return (
                  <Link to={`/song/${x.key}`}>
                    <div
                      className="m-3 top-tracks-list"
                      key={x.key}
                      onClick={() => {
                        console.log("was dispatched");
                        dispatch(selectSong(x));
                      }}
                    >
                      <Music
                        img={
                          x.images?.coverart ?? "https://picsum.photos/900/900"
                        }
                        title={x.title}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          // <h1>Recived</h1>
          <Loading />
        )}
      </div>
    </div>
  );
}
