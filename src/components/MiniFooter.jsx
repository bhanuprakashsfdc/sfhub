import React from 'react';

const MiniFooter = () => {
  return (
    <section className="py-0" style={{ marginTop: '-5.8rem' }}>
      <div className="container bg-primary">
        <div className="row justify-content-md-between justify-content-evenly py-4">
          <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
            <p className="fs--1 my-2 fw-bold">
              All rights Reserved &copy;{' '}
              <a style={{ color: 'honeydew' }} href="https://bhanuprakashsfdc.com/" target="_blank" rel="noopener noreferrer">
                Bhanu Prakash
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-8 col-md-6">
            <p className="fs--1 my-2 text-center text-md-end">
              Made with&nbsp;
              <svg
                className="bi bi-suit-heart-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#EB6453"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
              </svg>
              &nbsp;by&nbsp;
              <a className="fw-bold text-900" href="https://bhanuprakashsfdc.com/" target="_blank" rel="noopener noreferrer">
                Bhanu Prakash
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniFooter;
