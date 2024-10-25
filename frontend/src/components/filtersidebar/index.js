"use client"
import React, { useState, useEffect } from 'react';
import filterData from '../../../public/filterData.json';

const FilterSidebar = () => {
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    // Load the filter data from the JSON file
    setFilters(filterData);
  }, []);

  if (!filters) return <div>Loading filters...</div>;

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      {/* Metal Type Filter */}
      <div className="filter-category">
        <h4>Metal Type</h4>
        <ul>
          {filters.metalTypes.map((metal, index) => (
            <li key={index}>
              <input type="checkbox" /> <span>{metal.name}</span> <span>({metal.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Filter */}
      <div className="filter-category">
        <h4>Categories</h4>
        <ul>
          {filters.categories.map((category, index) => (
            <li key={index}>
              <input type="checkbox" /> <span>{category.name}</span> <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="filter-price">
        <h4>Price Range</h4>
        <input type="range" min={filters.priceRange.min} max={filters.priceRange.max} />
      </div>

      {/* Clear Filters */}
      <div className="filter-clear">
        <button>Clear All</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
