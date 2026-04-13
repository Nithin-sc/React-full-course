import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { Header } from '../../components/Header';
import './HomePage.css'

export function HomePage({cart}) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getHomePageData = async ()=>{
            const response =  await axios.get('/api/products')
            setProducts(response.data);
        }
       
        getHomePageData();
    },[]);
    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}