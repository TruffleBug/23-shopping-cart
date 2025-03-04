import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './styles.css';
import ItemListing from './itemListing';

export default function ShopPage() {
    const { itemCount, setItemCount } = useOutletContext();
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => {
            if(response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setItems(response))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>A network error was encourntered.</p>;

    return (
        <div className="shopPageBody">
            {items.map(el => {
                return (
                    <ItemListing 
                        key={el.title}
                        title={el.title}
                        price={el.price}
                        imageURL={el.image}
                        itemCount={itemCount}
                        setItemCount={setItemCount}
                    />
               )
            })}
        </div>
    )
}