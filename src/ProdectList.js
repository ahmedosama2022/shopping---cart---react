import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Prodectss from './components/Prodectss';

const ProdectList = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setproducts] = useState ([]);

    useEffect (() => {
        fetch(api_url)
        .then(res=>res.json())
        .then((data=> setproducts (data)));
    }, [])


   {
    products.map((Prodec => {
        return (
            <div>
                <Prodectss Prodec={Prodec}/>
            </div>
          )
    }))
   }
 
}

export default ProdectList