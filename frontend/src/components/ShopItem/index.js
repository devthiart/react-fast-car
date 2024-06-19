import StarRating from "../StarRating";
import BoxShopItem from "./BoxShopItem";
import ImageShop from "./ImageShop";

const ShopItem = ({ shopData }) => {
  return (
    <BoxShopItem className="shop-item">
      <ImageShop src={shopData.foto} alt={"Foto " + shopData.nome_fantasia} />
      <h2>{shopData.nome_fantasia}</h2>
      <p>{shopData.pontuacao} <StarRating rating={shopData.pontuacao} /></p>
      <p>{shopData.localizacao}</p>
      <p>{shopData.dias_atendimento}</p>
      <p>{shopData.horario_atendimento}</p>
    </BoxShopItem>
  )
}

export default ShopItem;
