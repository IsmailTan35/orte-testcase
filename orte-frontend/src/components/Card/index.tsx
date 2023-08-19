import { url } from "../../controller/Context";
import IProduct from "../../redux/interface/products";

interface ICard {
  item: IProduct;
}

const Card = (props: ICard) => {
  const { item } = props;
  const { name, description, price, stock, img } = item;
  return (
    <>
      <div
        style={{
          width: "350px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={url() + img}
            style={{
              width: "auto",
              height: "100%",
            }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            {name}
          </div>
          <div
            style={{
              color: "green",
            }}
          >
            {price} $
          </div>
        </div>
        <div>{description}</div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              color: "green",
            }}
          >
            Stock:
          </div>
          <div>{stock}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
