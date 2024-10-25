"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Constant from "@/config/constant";

const FiltersComponent = ({ sendToSearchData }) => {
  const [locationValue, setLocationValue] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const priceGap = 1000;

  const rangeMinRef = useRef(null);
  const rangeMaxRef = useRef(null);
  const progressRef = useRef(null);

  const niches = [
    { name: "Fitness" },
    { name: "Travel" },
    { name: "Food" },
  ];

  const languages = [
    { name: "English" },
    { name: "Spanish" },
    { name: "French" },
  ];

  const levels = [
    { name: "Beginner" },
    { name: "Intermediate" },
    { name: "Expert" },
  ];

  useEffect(() => {
    updateProgress();
  }, [minPrice, maxPrice]);

  const updateProgress = () => {
    if (progressRef.current) {
      const minPercent = (minPrice / 20000) * 100;
      const maxPercent = (maxPrice / 20000) * 100;
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  };

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - priceGap);
    setMinPrice(value);
    rangeMinRef.current.value = value;
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + priceGap);
    setMaxPrice(value);
    rangeMaxRef.current.value = value;
  };

  const handleSearch = () => {
    sendToSearchData({ location: locationValue });
  };

  return (
    <div className="filterWrapperContainer">
      <Link
        className="FilterMobile d-md-none FilterMobileCollapse"
        data-bs-toggle="collapse"
        href="#collapsSelectFilter"
        aria-expanded="false"
        aria-controls="collapsSelectFilter"
      >
        Influencer Filters
        <Image
          width={20}
          height={20}
          src={`${Constant.BASE_IMAGE_URL}/sort.svg`}
          alt="image"
        />
      </Link>
      <div className="collapse collapseFilterPanel" id="collapsSelectFilter">
        <div className="whiteBoxed Filterinfluencers">
          <div className="searchFilter">
            <div className="plateform-select">
              <label>Platform</label>
              <select className="selectpicker">
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>
            <div className="categry-select">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
                onChange={(e) => setLocationValue(e.target.value)}
                value={locationValue}
              />
            </div>
            <div className="search-btn">
              <button className="btn-fill" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="selectFilterWrapper">
          <ul>
            <li>
              <div className="selectFilterCard">
                <select
                  className="selectpicker"
                  multiple
                  title="Niches"
                  onChange={(e) => {
                    const options = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    );
                    console.log("Selected Niches:", options);
                  }}
                >
                  {niches.map((niche, index) => (
                    <option value={niche.name} key={index}>
                      {niche.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>

            <li>
              <div className="selectFilterCard">
                <select
                  className="selectpicker"
                  multiple
                  title="Language"
                  onChange={(e) => {
                    const options = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    );
                    console.log("Selected Languages:", options);
                  }}
                >
                  {languages.map((lang, index) => (
                    <option value={lang.name} key={index}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>

            <li>
              <div className="selectFilterCard">
                <select
                  className="selectpicker"
                  title="By Level"
                  onChange={(e) => {
                    console.log("Selected Level:", e.target.value);
                  }}
                >
                  {levels.map((level, index) => (
                    <option value={level.name} key={index}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Budget Range
                </button>
                <div className="PriceRange dropdown-menu dropdown-menu-end">
                  <strong>Budget Price</strong>
                  <div className="price-input">
                    <div className="field">
                      <span>Min</span>
                      <input
                        type="number"
                        className="input-min"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                      />
                    </div>

                    <div className="field">
                      <span>Max</span>
                      <input
                        type="number"
                        className="input-max"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="progress" ref={progressRef}></div>
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      className="range-min"
                      min="0"
                      max="20000"
                      value={minPrice}
                      step="1000"
                      ref={rangeMinRef}
                      onChange={handleMinPriceChange}
                    />
                    <input
                      type="range"
                      className="range-max"
                      min="0"
                      max="20000"
                      value={maxPrice}
                      step="1000"
                      ref={rangeMaxRef}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="javascript:void(0)"
                className="clearall"
                onClick={() => {
                  setLocationValue("");
                  setMinPrice(0);
                  setMaxPrice(20000);
                }}
              >
                Clear All
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FiltersComponent;