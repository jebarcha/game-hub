import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '65cf7128cc2d4db0ba4681bb53658fe9',
  },
});
