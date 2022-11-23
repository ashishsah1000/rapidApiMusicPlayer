import { song, user } from "../interface";

// intialization of users
export function intializeUser(username: string) {
  // intialize the user to localstore
  localStorage.setItem("user", username);
  var likedSongs: any = localStorage.getItem("liked");
  // console.log(likedSongs);
  if (likedSongs == null) {
    var setLike: user = {
      username: localStorage.getItem("user") || "",
      likedSongs: [],
    };
    // console.log(setLike);
    localStorage.setItem("liked", JSON.stringify(setLike));
  } else {
    // console.log("liked songs", likedSongs);
  }
}

export function getUser(): string {
  // console.log("this is the user", localStorage.getItem("user"));
  return localStorage.getItem("user")!;
}

export function addToFav(favSong: song) {
  var likes: user = JSON.parse(`${localStorage.getItem("liked")}`);
  // console.log("likedSongs previous", likes);
  let check: boolean = false;
  likes.likedSongs.map((x) => {
    if (x.id == favSong.id) check = true;
  });
  check
    ? console.log("already presebt")
    : likes.likedSongs.push({ ...favSong });
  localStorage.setItem("liked", JSON.stringify(likes));
}
export function getfav() {
  var likedSongs: user = JSON.parse(`${localStorage.getItem("liked")}`);
  return likedSongs.likedSongs;
}
export function deteletLikedSong(id: string) {
  var likedSongs: user = JSON.parse(`${localStorage.getItem("liked")}`);
  // console.log("previous", likedSongs.likedSongs);
  var check: song[] = likedSongs.likedSongs.filter((x) => {
    if (x.id == id) return false;
    else return true;
  });
  likedSongs.likedSongs = check;
  localStorage.setItem("liked", JSON.stringify(likedSongs));
  // console.log("song should be delted");
}

export {};
