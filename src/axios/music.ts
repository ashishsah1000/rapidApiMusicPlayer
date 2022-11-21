import axios from "axios";

export async function searchMusic(keyword: string) {
  let res: [] = [];
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: keyword, locale: "en-US", offset: "0", limit: "8" },
    headers: {
      "X-RapidAPI-Key": "4d36d0690amsha9fb495c3428903p1e73a3jsnbdf92e7f3487",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      res = response.data.tracks.hits;
      console.log("response is", res);
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log("from below", res);
  return res;
}

export const recommendEnglishSong = async (listid:string) => {
  var res: any = [];
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/charts/track",
    params: {
      locale: "en-US",
      listId: listid,
      pageSize: "20",
      startFrom: "0",
    },
    headers: {
      "X-RapidAPI-Key": "4d36d0690amsha9fb495c3428903p1e73a3jsnbdf92e7f3487",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      res = response.data.tracks;
      console.log("Recommended usa ", res);
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log("from below", res);

  // return res;
};
