import { useAppSelector } from "../../redux";
import { useSocket } from "../../controller/SocketProvider";
import ISize from "../../redux/interface/size";
import Button from "../../components/Button";

const Sizes = () => {
  const socket = useSocket();

  const sizes = useAppSelector(state => state.sizesRequest.items);
  const handleClick = (id: number) => {
    if (!socket) return;
    socket.emit("getProducts", id);
  };
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
          Sizes
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          {sizes.map((size: ISize, idx: number) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  handleClick(size.id);
                }}
                text={size.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sizes;
