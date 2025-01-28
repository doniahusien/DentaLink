import React from 'react'
import ProductCard from './ProductCard';
import img from '../../../public/images/market/tool2.png'
const ProductList = () => {
    const dentalProducts = [
        {
            name: "Dental Mirror",
            image: img,
            description: "Used for visualizing the oral cavity.",
            price: "$10.00",
            favorite: false 
        },
        {
            name: "Dental Scalers",
            image: img,
            description: "For removing plaque and tartar from teeth.",
            price: "$15.00",
            favorite: false
        },
        {
            name: "Dental Explorers",
            image: img,
            description: "Used to detect cavities and tooth decay.",
            price: "$8.00",
            favorite: false
        },
        {
            name: "Dental Forceps",
            image: img,
            description: "For extracting teeth.",
            price: "$25.00",
            favorite: false
        },
        {
            name: "Dental Burs",
            image: img,
            description: "Used in dental drills for cutting and polishing.",
            price: "$5.00",
            favorite: false
        },

    ];

    return (
        <div className='flex flex-row gap-5'>
            {
                dentalProducts.map((product,i) => (
                    <ProductCard product={product} key={i}/>
                ))
            }
        </div>
    )
}

export default ProductList