export interface song {
  coverart?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}
export interface playlist {
  index?: number;
  name: string;
  songs: song[];
}
export interface user {
  username: string;
  likedSongs: song[];
  // playlists?: playlist[];
}
