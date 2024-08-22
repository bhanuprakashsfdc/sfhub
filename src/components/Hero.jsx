import React from 'react'

const Hero = () => {
  return (
  <section class="pt-6 bg-600" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-6 order-0 order-md-1 text-end"><img class="pt-7 pt-md-0 w-100" src="assets/img/gallery/hero-header.png" width="470" alt="hero-header" /></div>
        <div class="col-md-7 col-lg-6 text-md-start text-center py-6">
          <h4 class="fw-bold font-sans-serif">Looking for Salesforce Demo Orgs ?</h4>
          <h1 class="fs-6 fs-xl-7 mb-5">Check Out Below</h1>
           { /* <a class="btn btn-primary me-2" href="#!" role="button">Get A Quote</a><a class="btn btn-outline-secondary" href="#!" role="button">Read more</a>  */}  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
