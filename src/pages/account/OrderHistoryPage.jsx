// src/pages/account/OrderHistoryPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

const SectionContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OrderCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  
  h4 {
    margin: 0;
    font-size: 1.1rem;
  }
  span {
    font-size: 0.9rem;
    color: #555;
  }
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  padding: 0.5rem 0;
`;

const OrderTotal = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  text-align: right;
  font-weight: bold;
  font-size: 1.1rem;
`;

const OrderHistoryPage = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    
    try {
      const ordersCollectionRef = collection(db, "orders");
      const q = query(ordersCollectionRef, where("userId", "==", currentUser.uid), orderBy("createdAt", "desc"));
      
      const querySnapshot = await getDocs(q);
      const userOrders = [];
      querySnapshot.forEach((doc) => {
        userOrders.push({ id: doc.id, ...doc.data() });
      });
      setOrders(userOrders);
    } catch (error) {
      console.error("Error fetching orders: ", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) {
    return <p>Loading order history...</p>;
  }

  return (
    <SectionContent>
      <h3>My Orders</h3>
      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        <OrdersList>
          {orders.map(order => (
            <OrderCard key={order.id}>
              <OrderHeader>
                <h4>Order #{order.id.substring(0, 8)}...</h4>
                <span>{order.createdAt.toDate().toLocaleDateString()}</span>
              </OrderHeader>
              <div>
                {order.items.map(item => (
                  <OrderItem key={item.cartId}>
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{(item.quantity * item.price).toFixed(2)} {item.currency}</span>
                  </OrderItem>
                ))}
              </div>
              <OrderTotal>
                Total: {order.totalCost.toFixed(2)} {orders[0].items[0].currency}
              </OrderTotal>
            </OrderCard>
          ))}
        </OrdersList>
      )}
    </SectionContent>
  );
};
export default OrderHistoryPage;