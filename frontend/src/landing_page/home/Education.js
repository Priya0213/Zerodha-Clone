import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className="row">
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"70%"}} alt='' />                </div>


                <div className='col-6 mt-5 text-muted'>
                    <h3 className='mb-3' style={{ color: "#393838" }}>Free and open market education</h3>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>
                        Varsity{" "}
                        <i 
                            class="fa fa-long-arrow-right" aria-hidden="true">
                        </i>
                    </a>

                    <p className='mb-3 mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A{" "}
                        <i 
                            class="fa fa-long-arrow-right" aria-hidden="true">
                        </i>
                    </a>
                </div>

            </div>
        </div>
     );
}

export default Education;