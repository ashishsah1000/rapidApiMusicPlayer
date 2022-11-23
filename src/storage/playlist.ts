// import { song } from "./user";
import { song } from "../interface";
import { playlist } from "../interface";
export function checkUserSubscription(): boolean {
  return true;
}
// intialize playlist
export function intializePlaylist() {
  if (localStorage.getItem("playlists") == null) {
    localStorage.setItem("playlists", JSON.stringify([]));
  } else {
    // console.log(
    //   "subscribed users localstorage file",
    //   localStorage.getItem("playlists")
    // );
  }
}

// Create a playlist
export function createPlaylist(name: string) {
  // create a playlist and add
  var playlists: playlist[] = JSON.parse(
    `${localStorage.getItem("playlists")}`
  );
  var newList: playlist = { name: name, songs: [] };
  playlists.push(newList);
  localStorage.setItem("playlists", JSON.stringify(playlists));
}

// get all the playlist
export function returnPlaylist(): playlist[] {
  return JSON.parse(`${localStorage.getItem("playlists")}`);
}

//  get all the names of just playlist
export function getPlaylistNames(): string[] {
  var temp: string[] = JSON.parse(`${localStorage.getItem("playlists")}`).map(
    (x: playlist) => x.name
  );
  return temp;
}
// adding to a specific playlist
export function addToPlaylist(playlistIndex: number, song: song): void {
  //   console.log("reciving id", playlistIndex);
  var temp: playlist[] = JSON.parse(`${localStorage.getItem("playlists")}`);
  var checkSong = temp[playlistIndex].songs.filter((x) => {
    if (x.id == song.id) {
      return true;
    } else return false;
  });
  if (checkSong.length > 0) {
    // console.log("already present");
  } else {
    temp[playlistIndex].songs.push(song);
    localStorage.setItem("playlists", JSON.stringify(temp));
  }
}

// adding to a specific playlist
export function getSpecificPlaylist(index: number): song[] {
  var temp: playlist[] = JSON.parse(`${localStorage.getItem("playlists")}`);
  //   console.log(temp[index!]);

  return temp[index!].songs;
}

// remove the a playlist
export function removeSinglePlaylist(index: number) {
  var temp: playlist[] = JSON.parse(`${localStorage.getItem("playlists")}`);
  var newArray = temp.filter((x, i) => {
    if (i == index) {
      return false;
    } else {
      return true;
    }
  });
  localStorage.setItem("playlists", JSON.stringify(newArray));
}

// deleting a specific song from playlist
export function delSongPlaylist(playlistIndex: number, songIndex: number) {
  //   console.log("we are here");
  var temp: playlist[] = JSON.parse(`${localStorage.getItem("playlists")}`);
  var songsTemp = temp[playlistIndex].songs.filter((x, i) => {
    if (i == songIndex) return false;
    else return true;
  });
  temp[playlistIndex].songs = songsTemp;
  //   console.log(temp);
  localStorage.setItem("playlists", JSON.stringify(temp));
}

// reset for the logout part
export function resetPlaylist() {
  localStorage.setItem("playlists", JSON.stringify([]));
}
