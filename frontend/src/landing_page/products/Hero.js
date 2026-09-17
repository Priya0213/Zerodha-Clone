import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5" style={{marginTop:"130px"}}>
      <div className="text-center p-3 mb-5 mt-5">
        <h2 className='mt-5' style={{ color: "#393838" }}>Zerodha Products</h2>
        <p className="text-muted fw-normal mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </p>
        <p className="mt-3 mb-5 text-muted">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;