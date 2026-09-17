import React from 'react';
function Hero() {
    return ( 
        <div className="container py-5 mb-5">  
            <div className='row text-center mt-5'>
                <img src="media/images/homeHero.png" alt="Home Hero" className='mb-4 mx-auto' style={{width:'60%'}}/>
            
            <h2 className='mt-5' style={{ color: "#393838" }}>Invest in everything</h2>
            <p className='fs-5 mb-5 mt-1 text-muted'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='py-2 btn btn-primary fs-5 fw-semibold' style={{width:"20%", margin:"0 auto", background:"#1775c3"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;