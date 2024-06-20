import axios from 'axios';

// const API_URL = 'http://localhost:8000/';
const API_URL = 'https://fast-car-db.vercel.app/';

const oficinasAPI = axios.create({ baseURL: API_URL });

async function getOficinas() {
  const response = await oficinasAPI.get('/oficinas');

  return response.data;
}

export {
  getOficinas
}