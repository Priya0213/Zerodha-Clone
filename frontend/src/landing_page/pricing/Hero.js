import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 border-bottom text-center">
        <h2 className='text-muted' style={{marginTop:"120px"}}>Charges</h2>
        <h5 className="mt-2" style={{color:"#7a7878"}}>
          List of all charges and taxes
        </h5>
      </div>


      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt='' style={{width:"50%"}}/>
          <h1 className="fs-5">Free equity delivery</h1>
          <p className="text-muted mt-4" style={{fontSize:"12px"}}>
            All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" alt='' style={{width:"50%"}}/>
          <h1 className="fs-5">Intraday and F&O trades</h1>
          <p className="text-muted mt-4" style={{fontSize:"12px"}}>
            Flat Rs. 20 or 0.03% (whichever is lower) per<br/> executed order on
            intraday trades across<br/> equity, currency, and commodity trades.<br/>
            Flat {"\u20B9"}20 on all options trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt='' style={{width:"50%"}}/>
          <h1 className="fs-5">Free direct MF</h1>
          <p className="text-muted mt-4" style={{fontSize:"12px"}}>
            All direct mutual fund investments are<br/> absolutely free — ₹ 0
            commissions & DP<br/> charges.
          </p>
        </div>
      </div>


    </div>
  );
}

export default Hero;