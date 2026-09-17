import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container py-5 mt-5 mb-5">  
            <div className='row text-center'>
            
            <h3 className='mt-5 mb-3' style={{ color: "#393838" }}>Open a Zerodha account</h3>
            <p className='fs-5 mb-5 mt-1 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='py-2 btn btn-primary fs-5 fw-semibold' style={{width:"20%", margin:"0 auto", background:"#1775c3"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;