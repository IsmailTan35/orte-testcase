import { useState } from "react";
import { useAppSelector } from "@/redux";
import { useSocket } from "@/controller/SocketProvider";
import ISize from "@/redux/interface/size";
import Button from "@/components/Button";
import "@/assets/css/sizes.css";

const Sizes = () => {
  const socket = useSocket();
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const sizes = useAppSelector(state => state.sizesRequest.items);
  const handleClick = (id: number) => {
    if (!socket) return;
    socket.emit("getProducts", id);
  };
  return (
    <>
      {" "}
      <div className="sizes-wrapper">
        <div className="sizes-title">Sizes</div>
        <div className="sizes-container">
          {sizes.map((size: ISize, idx: number) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  handleClick(size.id);
                  setSelectedItem(size.id);
                }}
                text={size.name}
                isActive={selectedItem === size.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sizes;
