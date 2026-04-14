import { useEffect, useState } from 'react';
import axios from 'axios';
import { HomePage } from './pages/home/HomePage'
import { CheckOutPage } from './pages/checkout/CheckOutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);




  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCartItems();
  }, [cart]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}  />} />
      <Route path='checkout' element={<CheckOutPage cart={cart}  />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
    </Routes>

  )
}

export default App
