"use client"
import ProductBadge from '@/components/ProductBadge/ProductBadge';
import ProductCol from '@/components/productcol';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import React, { useEffect, useState } from 'react';

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const apiData = [
      { id: 1, title: 'Diamond Ring', category: 'Rings', price: 250.00, product_image: 'https://via.placeholder.com/300?text=Diamond+Ring' },
      { id: 2, title: 'Gold Necklace', category: 'Necklaces', hot: true, price: 150.00, product_image: 'https://via.placeholder.com/300?text=Gold+Necklace' },
      { id: 3, title: 'Pearl Earrings', category: 'Earrings', hot: true, price: 75.00, product_image: 'https://via.placeholder.com/300?text=Pearl+Earrings' },
      { id: 4, title: 'Silver Bracelet', category: 'Bracelets', price: 100.00, sale: true, originalPrice: 150.00, product_image: 'https://via.placeholder.com/300?text=Silver+Bracelet' },
      { id: 5, title: 'Sapphire Pendant', category: 'Pendants', price: 200.00, hot: true, product_image: 'https://via.placeholder.com/300?text=Sapphire+Pendant' },
    ];
    setProducts(apiData);
    setFilteredProducts(apiData);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="product-section">
      <SectionTitle title="Our Products" align="center">
        Explore our exclusive collection.
      </SectionTitle>

      {/* Tabbing for product categories */}
      <ul className="nav nav-tabs justify-content-start mb-4">
        {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((category) => (
          <li className="nav-item" key={category}>
            <button
              className={`nav-link ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <ProductCol product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
