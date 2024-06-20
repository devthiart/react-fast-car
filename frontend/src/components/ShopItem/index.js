import StarRating from "../StarRating";
import BoxShopItem from "./BoxShopItem";
import ImageShop from "./ImageShop";
import ButtonLink from "../ButtonLink";

const ShopItem = ({ shopData }) => {
  return (
    <BoxShopItem className="shop-item">
      <ImageShop src={shopData.foto} alt={"Foto " + shopData.nome_fantasia} />
      <h2 className="title-shop">{shopData.nome_fantasia}</h2>
      <p className="score">{shopData.pontuacao} <StarRating rating={shopData.pontuacao} /></p>
      <p>{shopData.localizacao}</p>
      <p>{shopData.dias_atendimento}</p>
      <p>{shopData.horario_atendimento}</p>
      <ButtonLink id={shopData.id}>Saiba Mais</ButtonLink>
    </BoxShopItem>
  )
}

export default ShopItem;
