import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54395192-1d301966f0221603052d26baa';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}