import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 p-5 mt-3'>
                    <img 
                        src='/media/images/largestBroker.svg' 
                        alt='Largest Broker' />
                </div>

                <div className='col-6 fs-5 p-5 mt-4'>
                    <h3 style={{ color: "#393838" }}>
                        Largest stock broker in India
                        </h3>

                    <p className='mb-3 fs-5 mt-4 text-muted' style={{textDecoration:'none'}}>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India
                        daily by trading and investing in:
                    </p>
                    <div className='row text-muted'>
                        <div className='col-6'>
                            <ul>
                                <div>
                                <p><li>Future and Options</li></p>
                                <p><li>Commodity derivatives</li></p>
                                <p><li>Currency derivatives</li></p>
                                </div>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul> 
                                <div>
                                <p><li>Stocks & IPOs</li></p>
                                <p><li>Direct mutual funds</li></p>
                                <p><li>Bonds and Govt. Securities</li></p>
                                </div>
                            </ul>
                        </div>
                    </div> 
                    <img className='mt-4' src='\media\images\pressLogos.png' alt='Press logo' style={{width: '94%'}}/>
                    </div>
                </div>
            </div>
    );
}

export default Awards;