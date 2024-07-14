import React from "react";
import { useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let obj = useDispatchCart();
  let data = obj.state;
  let dispatch = obj.dispatch;
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }

  const handleClear = () => {
    dispatch({ type: "DROP" });
  };
  const handleCheckOut = async () => {
    let email = localStorage.getItem("currentUserEmail");

    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/CreateOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          data: data,
          date: new Date(),
        }),
      }
    );
    const json = await response.json();

    if (json.success) {
      dispatch({ type: "DROP" });
    }
    alert("Order Stored successfully, please check at myOrders section.");
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <div
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    >
                      X
                    </div>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-danger mt-5 me-2" onClick={handleClear}>
            Clear
          </button>
          <button className="btn bg-success mt-5 " onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
