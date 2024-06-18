import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const categoriasAPI = axios.create({ baseURL: API_URL });

async function getCategorias() {
  const response = await categoriasAPI.get('/categorias');

  return response.data;
}

export {
  getCategorias
}
