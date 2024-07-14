import React from "react";

function OrderCard(props) {
  let date = props.item.date;
  let order = props.item.order;
  return (
    <div>
      <br></br>
      <div className="card" style={{ width: "24rem", margin: "auto" }}>
        <div className="card-header">Order Date - {date}</div>
        <ul className="list-group list-group-flush">
          {order.map((item) => {
            return (
              <li className="list-group-item">
                Item: {item.name}
                <br></br>
                quantity: {item.qty}
                <br></br>
                size: {item.size}
                <br></br>
                price: {item.price}
              </li>
            );
          })}
        </ul>
      </div>
      <br></br>
    </div>
  );
}

export default OrderCard;
