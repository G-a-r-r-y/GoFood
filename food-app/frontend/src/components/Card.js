import { React, useState, useRef, useEffect } from "react";
import { useDispatchCart } from "./ContextReducer";

function Card(props) {
  let options = props.options[0];
  let priceOptions = Object.keys(options);

  let obj = useDispatchCart();
  let dispatch = obj.dispatch;
  let state = obj.state;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const priceRef = useRef();
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem.id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  return (
    <>
      {" "}
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline h-100 fs-5">Rs.{finalPrice}</div>
          </div>
          <hr></hr>
          <button
            className={"btn btn-success justify-center ms-2"}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
