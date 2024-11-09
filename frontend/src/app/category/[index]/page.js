"use client"
import React, { useEffect, useState } from 'react';
import FilterSidebar from '../../../components/filtersidebar';
import ProductCol from '../../../components/productcol';
import Breadcrumb from '../../../components/breadcrumb'
import { usePathname } from 'next/navigation';

const CategoryPage = () => {
  const pathname = usePathname();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated API response
    const productapiData = [
      { id: 1, title: 'Diamond Ring', category: 'Rings', price: 250.00, product_image: 'https://via.placeholder.com/300?text=Diamond+Ring' },
      { id: 2, title: 'Gold Necklace', category: 'Necklaces', hot: true, price: 150.00, product_image: 'https://via.placeholder.com/300?text=Gold+Necklace' },
      { id: 3, title: 'Pearl Earrings', category: 'Earrings', hot: true, price: 75.00, product_image: 'https://via.placeholder.com/300?text=Pearl+Earrings' },
      { id: 4, title: 'Silver Bracelet', category: 'Bracelets', price: 100.00, sale: true, originalPrice: 150.00, product_image: 'https://via.placeholder.com/300?text=Silver+Bracelet' },
      { id: 5, title: 'Sapphire Pendant', category: 'Pendants', price: 200.00, hot: true, product_image: 'https://via.placeholder.com/300?text=Sapphire+Pendant' },
    ];
    setProducts(productapiData);
  }, []);

  return (
    <>
      <Breadcrumb title={pathname} />
      <section className="category-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-12">
              <FilterSidebar />
            </div>
            <div className="col-md-10 col-12">
              {/* Loop over the products and pass each product to the ProductCol component */}
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
                    <ProductCol product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
