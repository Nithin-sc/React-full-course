import { Orderedproducts } from "./OrderedProducts";

export function OrderDetails({ order }) {

    return (
        <div className="order-details-grid">
            {order && order.products.map((orderProduct) => {
                
                    return (
                        <Orderedproducts orderProduct={orderProduct} />
                    );
                })}

        </div>
    );
}