import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((response) => {
        console.log("Orders:", response.data);
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading orders...</h3>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Orders</h2>

          {orders.map((order, index) => (
            <div className="order-item" key={index}>
              <h3>{order.name}</h3>

              <p>
                Quantity: <strong>{order.qty}</strong>
              </p>

              <p>
                Price: <strong>₹{order.price}</strong>
              </p>

              <p>
                Mode:{" "}
                <strong className={order.mode === "BUY" ? "buy" : "sell"}>
                  {order.mode}
                </strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;