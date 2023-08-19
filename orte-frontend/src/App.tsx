import Products from "./layouts/Products";
import Sizes from "./layouts/Sizes";
import Topbar from "./layouts/Topbar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <Sizes />
        <Products />
      </div>
    </>
  );
}

export default App;
