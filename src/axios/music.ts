import axios from "axios";
var apiUrl: string = "https://shazam.p.rapidapi.com";
var key: string = "aee5892085msha17877a3fa42ccap143b09jsn33375362f758";
// var apiUrl: string = "";
export async function searchMusic(keyword: string) {
  let res: [] = [];
  const options = {
    method: "GET",
    url: apiUrl + "/search",
    params: { term: keyword, locale: "en-US", offset: "0", limit: "8" },
    headers: {
      "X-RapidAPI-Key": key,
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

export const recommendEnglishSong = async (listid: string) => {
  var res: any = [];
  const options = {
    method: "GET",
    url: apiUrl + "/charts/track",
    params: {
      locale: "en-US",
      listId: listid,
      pageSize: "20",
      startFrom: "0",
    },
    headers: {
      "X-RapidAPI-Key": key,
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

  return res;
};
