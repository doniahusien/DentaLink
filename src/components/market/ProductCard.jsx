import React from 'react'
import Image from 'next/image'
const ProductCard = ({ product }) => {
    return (
        <>
            <div className='card flex flex-col bg-orange-400 w-56 '>
                <div>
                    <Image src={product.image} alt={product.name} width={300} height={300} />
                </div>
                <div>
                    <h4>{product.name}</h4>
                    
                </div>
                <p>{product.price}</p>                
            </div>
        </>
    )
}

export default ProductCard