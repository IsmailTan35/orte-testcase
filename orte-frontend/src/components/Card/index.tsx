import { url } from "@/controller/Context";
import IProduct from "@/redux/interface/products";
import "@/assets/css/card.css";
interface ICard {
  item: IProduct;
}

const Card = (props: ICard) => {
  const { item } = props;
  const { name, description, price, stock, img } = item;
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img-wrapper">
          <img src={url() + "/img?filename=" + img} className="card-img"></img>
        </div>
        <div className="card-title-wrapper">
          <div className="card-title">{name}</div>
          <div className="card-price">{price} $</div>
        </div>
        <div>{description}</div>
        <div className="card-footer">
          <div className="card-footer-item">Stock:</div>
          <div>{stock}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
