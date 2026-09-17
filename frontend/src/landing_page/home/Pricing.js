import React from 'react';
function Pricing() {
    return ( 
         <div className="container mt-5">
      <div className="row">


        <div className="col-5 text-muted px-4">
          <h2 className="mb-3 fs-4" style={{ color: "#393838" }}>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-7 mt-4">
            <div className="row align-items-center">
                <img src='media/images/pricing.png' alt='' />
            </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;