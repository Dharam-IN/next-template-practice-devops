import React from 'react';
import ProductDetails from '../../../components/productDetails'
import Constants from '../../../config/constant'

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   // Fetch title, metadata, and product details from an API
//   const response = await fetch(`https://api.example.com/products/${id}`);
//   const productData = await response.json();

//   const title = productData.title || 'Product Details';
//   const price = productData.price || '$0';
//   const metadata = {
//     title: title,
//     description: productData.description || 'Description of the product',
//   };

//   return {
//     props: {
//       title,
//       price,
//       metadata,
//       productData,
//     },
//   };
// }

// const ProductDetailsPage = ({ title, price, metadata, productData }) => {
const ProductDetailsPage = () => {
  // Dummy data for product details
  const title = 'Luxury Diamond Ring';
  const price = '$1,200.00';
  const productData = {
    id: 1,
    title: 'Luxury Diamond Ring',
    description: 'A stunning diamond ring with a platinum band, perfect for any special occasion.',
    category: 'Rings',
    price: 1200.00,
    originalPrice: 1500.00,
    discount: 20, // 20% off
    product_image: 'https://via.placeholder.com/500?text=Luxury+Diamond+Ring',
    available: true,
    ratings: 4.8,
    reviewsCount: 135,
    colors: ['red', 'blue', 'green', 'gold', 'silver'],
    sizes: ['6', '7', '8', '9', '10'],
    images: [
      'https://assets.angara.com/ring/sr1912aqd/sr1912aqd_240.jpg?width=768&quality=95',
      'https://via.placeholder.com/500?text=Image+1',
      'https://via.placeholder.com/500?text=Image+2',
      'https://via.placeholder.com/500?text=Image+3',
      'https://via.placeholder.com/500?text=Image+4',
    ],
    totalCaratWeight: {
      title: "Total Carat Weight : 1 Ct",
      data: [
        {
          value: "0.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "1.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "2.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "3.01 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "4.56 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "1.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "2.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "3.01 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "4.56 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        }
      ]
    },
    metalType: {
      title: "Metal Type : Platinum",
      data: [
        {
          value: "0.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "1.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "2.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "3.01 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "4.56 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "1.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "2.93 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "3.01 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        },
        {
          value: "4.56 Ct",
          image: `${Constants.BASE_IMAGE_URL}/header_gem.webp`
        }
      ]
    }
  };

  return (
    <>
      <ProductDetails title={title} price={price} productData={productData} />
    </>
  );
};

export default ProductDetailsPage;