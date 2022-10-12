import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

/* headers: {
    'X-RapidAPI-Key': 'f9de331f06msha38cf4b241df4bap152a05jsne58e33e63adf',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  } */

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f9de331f06msha38cf4b241df4bap152a05jsne58e33e63adf",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
