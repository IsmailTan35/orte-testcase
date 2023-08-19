import Products from "./layouts/Products";
import Sizes from "./layouts/Sizes";
import Topbar from "./layouts/Topbar";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Topbar />
        <Sizes />
        <Products />
      </div>
    </>
  );
}

export default App;
