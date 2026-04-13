import axios from 'axios'
import { Fragment, useEffect, useState } from 'react';
import { Orders } from './Orders';
import { Header } from '../../components/Header';
import './OrdersPage.css'

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, [])
    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <Orders orders={orders} />
            </div>
        </>
    );
}