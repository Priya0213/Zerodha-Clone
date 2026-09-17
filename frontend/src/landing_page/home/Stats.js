import React from 'react';
function Stats() {
    return ( 
        <div className="container p-3">
        <div className="row p-4">

        <div className="col-6 p-2 mt-5">
          <h1 className="fs-2 mb-5 mt-3" style={{ color: "#393838" }}>Trust with confidence</h1>
          <h2 className="fs-4" style={{ color: "#393838" }}>Customer-first always</h2>
          <p className="text-muted">
            That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4" style={{ color: "#393838" }}>No spam or gimmicks</h2>
          <p className="text-muted">
            No  gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>
          <h2 className="fs-4" style={{ color: "#393838" }}>The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4" style={{ color: "#393838" }}>Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>


        <div className="col-6 p-5 mb-5 ">
          <img src="media/images/ecosystem.png" style={{ width: "120%" }} alt='Ecosystem'/>
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        


        <div className='col-3 mt-2'>
            <img src='media/images/kc-logo-landing.svg' alt='Kite Connect'/>
        </div>

        <div className='col-7 text-muted ps-1 text-muted'>
            <p style={{fontSize:'14px'}}>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.<a href="" className="mx-1" style={{ textDecoration: "none" }}>
              Explore{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a></p>
            
        </div>

        <div className='col-2 mt-2'>
            <img src='media/images/kc-banner-image.svg' alt='Kite Connect' />
        </div>



    </div>
    </div>
    
  );
}
export default Stats;