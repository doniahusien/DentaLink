import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import img from '../../../public/images/market/tool2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
    <button
        className="absolute left-[-50px] z-10 bg-gray-100 w-10 h-10 shadow-xl  -translate-y-1/2 top-1/2 hover:bg-gray-200 text-[#5A5A5A] text-4xl "
        onClick={onClick}
        aria-label="Previous"
    >
        &#8249; {/* Left Arrow */}
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="absolute right-0 z-10 bg-gray-100 w-10 h-10 shadow-xl -translate-y-1/2 top-1/2 hover:bg-gray-200 text-[#5A5A5A] text-4xl "
        onClick={onClick}
        aria-label="Next"
    >
        &#8250; {/* Right Arrow */}
    </button>
);

const ProductList = () => {
    const dentalProducts = [
        {
            name: "Dental Mirror",
            image: img,
            description: "Used for visualizing the oral cavity.",
            price: "$10.00",
        },
        {
            name: "Dental Scalers",
            image: img,
            description: "For removing plaque and tartar from teeth.",
            price: "$15.00",
        },
        {
            name: "Dental Explorers",
            image: img,
            description: "Used to detect cavities and tooth decay.",
            price: "$8.00",
        },
        {
            name: "Dental Forceps",
            image: img,
            description: "For extracting teeth.",
            price: "$25.00",
        },
        {
            name: "Dental Burs",
            image: img,
            description: "Used in dental drills for cutting and polishing.",
            price: "$5.00",
        },
        {
            name: "Dental Syringes",
            image: img,
            description: "Used for administering anesthesia.",
            price: "$12.00",
        },
    ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='flex justify-end pr-10'>
            <div className="pt-10 relative w-[1300px]">
                <Slider {...settings}>
                    {dentalProducts.map((product, i) => (
                        <div key={i} className="">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default ProductList;
