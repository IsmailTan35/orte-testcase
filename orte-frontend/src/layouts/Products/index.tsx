import Card from "@/components/Card";
import { useAppSelector } from "@/redux";
import IProduct from "@/redux/interface/products";
import "@/assets/css/products.css";

const Products = () => {
  const products = useAppSelector(state => state.productsRequest.items);

  return (
    <>
      {" "}
      <div className="products-wrapper">
        <div className="products-title">Products</div>
        <div className="products-container">
          {" "}
          {products.length > 0 ? (
            products.map((item: IProduct, idx: number) => {
              return <Card key={idx} {...{ item }}></Card>;
            })
          ) : (
            <div className="products-no-product">No product</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
