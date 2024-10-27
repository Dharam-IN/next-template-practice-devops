"use client"
import React, { useEffect, useState } from 'react';

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Fetching filter data from a mock API
  const fetchFilterData = async () => {
    const response = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          age: ['0-3 Months', '3-6 Months', '6-9 Months', '9-12 Months', '12-18 Months', '18-24 Months'],
          category: ['Tops', 'Bottoms', 'Accessories', 'Outerwear', 'Footwear', 'Sleepwear'],
          price: ['Under 500', '500-1000', '1000-2000', '2000-3000', 'Above 3000'],
          color: ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple'],
          brand: ['Brand A', 'Brand B', 'Brand C', 'Brand D'],
          size: ['XS', 'S', 'M', 'L', 'XL'],
        });
      }, 100)
    );
    setFilters(response);
  };

  useEffect(() => {
    fetchFilterData();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (!updatedFilters[category]) updatedFilters[category] = [];

      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        updatedFilters[category].push(value);
      }
      return updatedFilters;
    });
  };

  const applyFilters = () => {
    console.log('Selected Filters:', selectedFilters);
    // Here you would implement logic to apply filters in your app or send them to the backend.
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button className="btn btn-primary d-lg-none mb-3" onClick={toggleSidebar}>
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      {/* Sidebar */}
      <div className={`filter-sidebar ${isOpen ? 'show' : ''}`}>
        <h5 className="mb-3">Filter by</h5>
        <div className="accordion" id="accordionExample">
          {Object.keys(filters).map((category, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${category}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${category}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse-${category}`}
                >
                  {category.toUpperCase()}
                </button>
              </h2>
              <div
                id={`collapse-${category}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading-${category}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {filters[category].map((option, optionIndex) => (
                    <div className="form-check" key={optionIndex}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={option}
                        id={`${category}-${optionIndex}`}
                        onChange={() => handleFilterChange(category, option)}
                      />
                      <label className="form-check-label" htmlFor={`${category}-${optionIndex}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-danger mt-3 w-100" onClick={applyFilters}>
          Apply
        </button>
      </div>
    </>
  );
};

export default FilterSidebar;
