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

export interface songLists {
  // song:
}
export interface serverSong {
  key: string;
  title: string;
  subtitle: string;
  images: {
    background?: string;
    coverart?: string;
    coverarthq?: string;
  };
}
export interface serverSongs {
  songs: serverSong[];
}
