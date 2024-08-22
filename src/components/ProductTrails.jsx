import React, { useState } from 'react';
import trailsData from '../data/trailsData.json';

const ProductTrails = () => {
  const [selectedTrail, setSelectedTrail] = useState('all');

  const handleFilter = (filter) => {
    setSelectedTrail(filter);
  };

  const filteredTrails = trailsData.filter(trail => {
    if (selectedTrail === 'all') return true;
    if (selectedTrail === 'product' && trail.company === 'Salesforce') return true;
    if (selectedTrail === 'industry' && trail.company !== 'Salesforce') return true;
    return false;
  });

  return (
    <section>
      <div className="container">
        <button className="btn btn-primary me-2" onClick={() => handleFilter('all')}>All</button>
        <button className="btn btn-primary me-2" onClick={() => handleFilter('product')}>Product Trails</button>
        <button className="btn btn-primary me-2" onClick={() => handleFilter('industry')}>Industry Based Trails</button>

        <div className="row mt-5">
          {filteredTrails.map((trail, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-150">
                <div className="card-body">
                  <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{trail.title}</h5>
                  <p>{trail.company}</p>
                  <p>{trail.description}</p>
                  <p>{trail.duration}</p>
                  <a className="btn btn-primary me-2" href={trail.link} role="button" target="_blank" rel="noopener noreferrer">Sign Up</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTrails;
