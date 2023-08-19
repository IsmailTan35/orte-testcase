import Products from "./layouts/Products";
import Sizes from "./layouts/Sizes";
import Topbar from "./layouts/Topbar";

function App() {
  return (
    <>
      <div className="wrapper">
        <div
          style={{
            height: "100%",
            flex: "1 1 auto",
          }}
        >
          <Topbar />
          <Sizes />
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
