import React from 'react';

export default function HomePopularStyle() {
  return (
    <div className="container-fluid popular-styles-section">
      <div className="row">
        <div className="col-md-2 col-12 d-flex align-items-center justify-content-center">
          <div className="vertical-text">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>
        <div className="col-md-10 col-12">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src="https://assets.angara.com/assets/homepage-Assets/us/top-categories/certified-jewelry.jpg?width=3000&quality=95"
                alt="Style 1"
                className="img-fluid main-image"
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-md-6 col-6 mb-3">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Style 2"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-6 mb-3">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Style 3"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Style 4"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Style 5"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
