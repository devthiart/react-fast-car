import StarRating from "../StarRating";
import BoxShopItem from "./BoxShopItem";
import ImageShop from "./ImageShop";

const ShopItem = ({ shopData }) => {
  return (
    <BoxShopItem className="shop-item">
      <ImageShop src={shopData.foto} alt={"Foto " + shopData.nome_fantasia} />
      <h2 className="title-shop">{shopData.nome_fantasia}</h2>
      <p className="score">{shopData.pontuacao} <StarRating rating={shopData.pontuacao} /></p>
      <p>{shopData.localizacao}</p>
      <p>{shopData.dias_atendimento}</p>
      <p>{shopData.horario_atendimento}</p>
    </BoxShopItem>
  )
}

export default ShopItem;
