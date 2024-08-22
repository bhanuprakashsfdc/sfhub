import React from 'react'

const MiniHeader = () => {
  return (
    <section className="bg-primary py-2 d-none d-sm-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-auto d-none d-lg-block">
          <p className="my-2 fs--1">
            <i className="fas fa-map-marker-alt me-3"></i>
            <span>1600 Amphitheatre Parkway, CA 94043</span>
          </p>
        </div>
        <div className="col-auto ms-md-auto order-md-2 d-none d-sm-block">
          <ul className="list-unstyled list-inline my-2">
            <li className="list-inline-item">
              <a className="text-decoration-none" href="#!">
                <i className="fab fa-facebook-f text-900"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-decoration-none" href="#!">
                <i className="fab fa-pinterest text-900"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-decoration-none" href="#!">
                <i className="fab fa-twitter text-900"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-decoration-none" href="#!">
                <i className="fab fa-instagram text-900"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <p className="my-2 fs--1">
            <i className="fas fa-envelope me-3"></i>
            <a className="text-900" href="mailto:vctung@outlook.com">vctung@outlook.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MiniHeader
