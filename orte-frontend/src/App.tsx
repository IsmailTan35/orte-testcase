import { useAppSelector } from "./redux";
import IProduct from "./redux/interface/products";
import ISize from "./redux/interface/size";

function App() {
  const sizes = useAppSelector(state => state.sizesRequest.items);
  const products = useAppSelector(state => state.productsRequest.items);
  return (
    <>
      <div>
        <div>
          <div>Sizes</div>
          <div>
            {sizes.map((size: ISize) => {
              return <div>{size.name}</div>;
            })}
          </div>
        </div>
        <div>
          <div>Products</div>
          <div>
            {" "}
            {products.map((size: IProduct) => {
              return <div>{size.name}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
