import { Route, Routes } from "react-router-dom";
import { Music, Navbar, Song, TopList } from "../components";
import Banner from "../components/banner/Banner";
import Sidenav from "../components/sidenav/Sidenav";
import { useSelector } from "react-redux";
import "./main.css";
import Search from "./search/Search";
import Liked from "./liked/Liked";
import { getUser, intializeUser } from "../storage/user";
import Playlist from "./playlist/Playlist";
import Error from "./error/Error";
import { useKeycloak } from "@react-keycloak/web";
import { useDebugValue, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubscription, setUser } from "../features/songs";
import {
  addSubscriber,
  intializeSubscribers,
  instializeSubscription,
  getSubscriptionStaus,
  getSubscribedUsers,
  setSubscriptionStaus,
  setSubscriptionStausfalse,
} from "../storage/subscribe";
import { intializePlaylist } from "../storage/playlist";
import Success from "./success/Success";
// import Disc from "../components/disc/Disc"
export default function Main() {
  var dispatch = useDispatch();
  const background: string = useSelector(
    (state: any) => state.songs.backgroundUrl
  );
  // console.log(background);
  const { keycloak, initialized } = useKeycloak();
  // keycloak.logout();
  interface user {
    username: string;
  }
  // console.log(keycloak);
  const userprofile = async () => {
    var res = await keycloak.loadUserProfile();
    intializeUser(res.username!);
    dispatch(setUser(res.username));
    // console.log("retrive the username", res);
  };
  // intialization to local storage
  userprofile();
  intializeSubscribers();
  instializeSubscription();
  dispatch(setSubscription(getSubscriptionStaus()));
  intializePlaylist();
  // check and set subscribers
  var user: string = useSelector((state: any) => state.songs.user);
  checkSubscription(user);

  function checkSubscription(username: string) {
    var subs = getSubscribedUsers();
    console.log("subscribed suers", subs, "checking with", user);
    let tempusers: string[] = subs.filter((x) => {
      if (x == user) {
        return true;
      } else return false;
    });
    console.log("tempUser", tempusers);
    if (tempusers.length > 0) {
      //  user has already subscribed
      setSubscriptionStaus();
      dispatch(setSubscription("true"));
    } else {
      console.log("user need to buy a new one");
      setSubscriptionStausfalse();
      dispatch(setSubscription("false"));
    }
  }

  useEffect(() => {}, []);
  return (
    <div className="w-100 h-100 d-flex flex-row ">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "250px", height: "100vh", zIndex: 99 }}
      >
        {/* side nav goes here */}
        <Sidenav />
      </div>
      <div
        className="flex-grow-1 main-container "
        style={{
          background: `url(${background})`,
        }}
      >
        <div className="inner-container">
          <Navbar />
          <Routes>
            <Route path="/home" element={<TopList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/cancel" element={<Error />} />
            <Route path="/success" element={<Success />} />
            <Route path="/song/:id" element={<Song />} />
            <Route path="*" element={<TopList />} />
          </Routes>
          {/* <TopList /> */}
          {/* <Song /> */}
        </div>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
