import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button/Button';
import fav from '../../../public/images/icons/fav.svg'
const ProductCard = ({ product }) => {
  return (
    <div className="card flex flex-col border border-primary gap-5 flex-center items-center shadow-lg rounded-lg py-4 w-60 ">
      <div >
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={160}
          className="rounded"
        />
      </div>

      <div className="flex flex-col text-left w-full gap-5">
        <div className='flex flex-row justify-around'>
          <h4 className="font-semibold ">{product.name}</h4>
          <Image src={fav} alt={product.name } width={20} height={20} />
        </div>
        <p className="pl-5">{product.price}</p>
       
      </div>
       <Button title='buy' link='/buy' color="white"/>
    </div>
  );
};

export default ProductCard;
