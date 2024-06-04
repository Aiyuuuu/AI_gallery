// src/api.js
import axios from 'axios';

const API_URL = 'https://civitai.com/api/v1'; // Replace with your actual API URL

export const fetchImages = async (filter,batchNumber) => {
  try {
    console.log("batch number passed to api", batchNumber)
    const response = await axios.get(`${API_URL}/images?limit=50&nsfw=false&page=${batchNumber}`);
    return response.data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export default fetchImages;

// fetchImages().then(data => {
//     console.log(data);
//   }).catch(error => {
//     console.error(error);
//   });


