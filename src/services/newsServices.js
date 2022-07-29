//API URL
import axios from 'axios';
export const API_URL = 'https://newsapi.org/v2';

export const API_KEY = `${process.env.REACT_APP_API_KEY}`;
//export const API_PARAMS = `&pageSize=${PAGESIZE}`;

//API End Points
export const HEADLINES = `${API_URL}/top-headlines?apiKey=${API_KEY}`;
export const SOURCES = `${API_URL}/top-headlines/sources?apiKey=${API_KEY}`;

export async function getHeadlines(country = "in"){
  try {
    let url = `${HEADLINES}&country=${country}`
    const response = await axios.get(url);
    const data = await response.data
    return data
  } catch (error) {
    throw new Error(error);
  }
}
export async function getSources(country = "in"){
  try {
    let url = `${SOURCES}&country=${country}`
    const response = await axios.get(url);
    const data = await response.data
    return data
  } catch (error) {
    throw new Error(error);
  }
}

export async function getHeadlinesBySource(source){
  
  try {
    let url = `${HEADLINES}&sources=${source.split(' ').join('-').toLowerCase()}`
    console.log(url);
    const response = await axios.get(url);
    console.log(response);
    const data = await response.data
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

