import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3 className='mt-5 text-muted'>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\zerodhaFundhouse.png" alt=''style={{width:"60%"}}/>
          <p className="text-muted mt-4" style={{fontSize:"13px"}}>Our asset management venture<br/> that is creating simple and transparent index <br/>funds to 
            help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\sensibull-logo.svg" alt='' style={{width:"75%", marginTop:"14px"}}/>
          <p className="text-muted mt-4" style={{fontSize:"13px"}}>Options trading platform that lets you create strategies, analyse poositions, and examine data points like
            open interest, FII/DII. and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\tijori.svg" alt='' style={{width:"50%", marginTop:"10px"}}/>
          <p className="mt-2 text-muted"style={{fontSize:"13px"}}>Investment research platform<br/> that offers detailed insights on stocks,<br/> sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\streakLogo.png" alt='' style={{width:"50%"}}/>
          <p className="mt-4 text-muted"style={{fontSize:"13px"}}>Systematic trading platform<br/> that allows you to create and backtest<br/> strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt='' style={{width:"60%"}}/>
          <p className="mt-4 text-muted"style={{fontSize:"13px"}}>Thematic investing platform<br/> that helps you invest in diversified<br/> baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\ditto-logo.png" alt='' style={{width:"40%"}}/>
          <p className="mt-4 text-muted"style={{fontSize:"13px"}}>Personalized advice on life<br/> and health insurance. No spam<br/> and no mis-selling.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5 fw-semibold"
          style={{ width: "20%", margin: "0 auto", background:"#1775c3"}}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;