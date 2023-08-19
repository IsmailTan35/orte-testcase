import Card from "../../components/Card";
import { useAppSelector } from "../../redux";
import IProduct from "../../redux/interface/products";

const Products = () => {
  const products = useAppSelector(state => state.productsRequest.items);

  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            padding: "20px",
          }}
        >
          Products
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            justifyContent: "center",
          }}
        >
          {" "}
          {products.length > 0 ? (
            products.map((item: IProduct, idx: number) => {
              return <Card key={idx} {...{ item }}></Card>;
            })
          ) : (
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "1.125rem",
                fontWeight: "bold",
              }}
            >
              No products
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
