import './Home.css';
import { useEffect, useState } from 'react';
import { getOficinas } from '../../services/oficinas';
import { getCategorias } from '../../services/categorias';
import Header from '../../components/Header';
import Categorias from '../../components/Categorias';
import ShopItem from '../../components/ShopItem';
import ShopContainer from '../../components/ShopContainer';

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
    <div className="Home">
      <Header />
      <Categorias options={categorias} />
      <ShopContainer>{
        oficinas.map(oficina => {
          return (
            <ShopItem key={oficina.id} shopData={oficina} />
          )
        })
      }</ShopContainer>

    </div>
  );
}

export default Home;
