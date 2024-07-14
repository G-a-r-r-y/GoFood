import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderCard from "../components/OrderCard";

function MyOrder() {
  let email = localStorage.getItem("currentUserEmail");
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/api/OrderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const json = await response.json();
    setData(json.sendingInfo);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <h1 className="m-2">Order History </h1>
        {data.map((item) => {
          return <OrderCard item={item} key={item.date} />;
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MyOrder;
