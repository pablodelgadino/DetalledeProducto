import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/itemDetail';

const cakes = 
    {
      id: 1,
      category: "sweet",
      stock: 10,
      sold: 0,
      title: "Choco-Oreo",
      description: "Tortas heladas a base de crema y oreos",
      price: 1500,
      img: "../cakes/torta.jpg",
    };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(cakes);
            },2000);
        });

        getData.then(res => setData(res));
    }, [])


    return (
    <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;