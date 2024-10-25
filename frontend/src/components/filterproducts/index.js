import React from 'react';

const FiltersProducts = () => {
  const products = [
    { id: 1, name: 'Gold Ring', price: '₹20,000', image: '/images/ring.jpg' },
    { id: 2, name: 'Diamond Necklace', price: '₹50,000', image: '/images/necklace.jpg' },
    { id: 3, name: 'Silver Earrings', price: '₹10,000', image: '/images/earrings.jpg' }
  ];

  return (
    <div className="products-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FiltersProducts;