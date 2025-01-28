import React from 'react'
import Image from 'next/image'
const ToolCard = ({ img, title, price }) => {
    return (
        <>
            <div className='card '>
                <div>
                    <Image src={img} alt={title} />
                </div>
                <div>
                    <h4>{title}</h4>
                    
                </div>
                <p>{price}</p>                


            </div>
        </>
    )
}

export default ToolCard