import React from 'react'
import indtrailsData from '../data/industryTrails.json';
const IndustryTrails = () => {
  return (
    <div className="container">
    <div className="row" id="itrails">
      <h1 className="text-center mb-5">Salesforce Demo Orgs - Industry-Based Trails</h1>
      {indtrailsData.map((trail, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-150">
            <div className="card-body">
              <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{trail.title}</h5>
              <p>{trail.company}</p>
              <p>{trail.description}</p>
              <p>{trail.duration}</p>
              {trail.links.map((link, linkIndex) => (
                <a
                  className="btn btn-primary me-2"
                  href={link.url}
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={linkIndex}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default IndustryTrails
