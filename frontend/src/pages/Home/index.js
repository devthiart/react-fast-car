import './Home.css';
import { useEffect, useState } from 'react';
import { getOficinas } from '../../services/oficinas';
import { getCategorias } from '../../services/categorias'
import Header from '../../components/Header';
import Categorias from '../../components/Categorias';

const Home = () => {
  const [oficinas, setOficinas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  async function fetchCategorias() {
    const APICategorias = await getCategorias();
    setCategorias(APICategorias);
  }

  async function fetchOficinas() {
    const APIOficinas = await getOficinas();
    setOficinas(APIOficinas);
  }

  useEffect(() => {
    fetchCategorias();
    fetchOficinas();
  }, [])

  return (
    <div className="App">
      <Header />
      <Categorias options={categorias} />
      {oficinas.map(oficina => {
        return (
          <p key={oficina.id}>{oficina.nome_fantasia}</p>
        )
      })}
    </div>
  );
}

export default Home;
