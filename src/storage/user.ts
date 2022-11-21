interface song {
  coverart?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export function intializeUser(username: string, sub: string) {
  // intialize the user to localstore
  localStorage.setItem("user", username);
  localStorage.setItem("sub", sub);
  var likedSongs = JSON.parse(`${localStorage.getItem("liked")}`);
  if (likedSongs.length > 0) {
    console.log("liked songs", likedSongs);
  } else {
    localStorage.setItem("liked", JSON.stringify([]));
  }
}

export function getUser(): string {
  return "ashish";
}
export function getSub(): boolean {
  return false;
}

export function addToFav(favSong: song) {
  var likedSongs = JSON.parse(`${localStorage.getItem("liked")}`);
  console.log("likedSongs previous", likedSongs);
  likedSongs.push({ ...favSong });
  localStorage.setItem("liked", JSON.stringify(likedSongs));
}
export function getfav() {
  var likedSongs = JSON.parse(`${localStorage.getItem("liked")}`);
  return likedSongs;
}
export function createPlaylist(name: string) {
  // create a playlist and add
}
export function returnPlaylist(): string[] {
  return ["ashish"];
}
export function addToPlaylist(id: number): void {
  console.log("reciving id", id);
}
export {};
