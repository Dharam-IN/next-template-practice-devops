'use client'
import React, { useEffect, useState } from 'react';

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    
    const fetchProducts = async () => {
        const apiData = [
            { id: 1, name: 'Diamond Ring', category: 'Rings', price: 250.00, image: 'https://via.placeholder.com/300?text=Diamond+Ring' },
            { id: 2, name: 'Gold Necklace', category: 'Necklaces',hot: true, price: 150.00, image: 'https://via.placeholder.com/300?text=Gold+Necklace' },
            { id: 3, name: 'Pearl Earrings', category: 'Earrings',hot: true, price: 75.00, image: 'https://via.placeholder.com/300?text=Pearl+Earrings' },
            { id: 4, name: 'Silver Bracelet', category: 'Bracelets', price: 100.00, sale: true, originalPrice: 150.00, image: 'https://via.placeholder.com/300?text=Silver+Bracelet' },
            { id: 5, name: 'Sapphire Pendant', category: 'Pendants', price: 200.00, hot: true, image: 'https://via.placeholder.com/300?text=Sapphire+Pendant' },
        ];        
      setProducts(apiData);
      setFilteredProducts(apiData);
    };

    fetchProducts();
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
    <div className="container product-section">
      <h2 className="text-center my-4">Products</h2>
      
      {/* Tabbing for product categories */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleFilter('All')}
          >
            All Products
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeCategory === 'Rings' ? 'active' : ''}`}
            onClick={() => handleFilter('Rings')}
          >
            Rings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeCategory === 'Necklaces' ? 'active' : ''}`}
            onClick={() => handleFilter('Necklaces')}
          >
            Necklaces
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeCategory === 'Earrings' ? 'active' : ''}`}
            onClick={() => handleFilter('Earrings')}
          >
            Earrings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeCategory === 'Bracelets' ? 'active' : ''}`}
            onClick={() => handleFilter('Bracelets')}
          >
            Bracelets
          </button>
        </li>
      </ul>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.category}</p>
                  {product.sale ? (
                    <p>
                      <span className="text-muted text-decoration-line-through">${product.originalPrice}</span>{' '}
                      <span className="text-danger">${product.price}</span>
                    </p>
                  ) : (
                    <p>${product.price.toFixed(2)}</p>
                  )}
                  {product.hot && <span className="badge bg-danger">HOT</span>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
