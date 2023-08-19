import "../../assets/css/topbar.css";
const Topbar = () => {
  return (
    <>
      <div
        style={{
          flex: "1 1 auto",
          borderBottom: "1.5px solid rgba(0,0,0,0.2)",
          padding: "20px",
          background: "#000",
          display: "flex",
          color: "#fff",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="topbar-logo">Tiso</div>
        <div
          style={{
            fontSize: "1.5rem",
            textAlign: "right",
          }}
        >
          ORTE TestCase
        </div>
      </div>
    </>
  );
};

export default Topbar;
