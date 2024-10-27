import FiltersProducts from '@/components/filterproducts';
import FilterSidebar from '@/components/filtersidebar';
import FiltersComponent from '@/components/newfiltersidebar';
import React from 'react';

const CategoryPage = () => {
  return (
    <section className="category-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-12">
            <FilterSidebar />
          </div>
          <div className="col-md-10 col-12">
            <FiltersProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;