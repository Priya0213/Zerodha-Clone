import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <img className='mt-4' src={imageURL} alt='' style={{width:"80%"}}/>
        </div>
        <div className="col-4 p-5 mt-5">
          <h3 style={{color:"#393838"}}>{productName}</h3>
          <p className='mt-5'>{productDesription}</p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
            Try Demo{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <a href="" style={{ textDecoration: "none", marginLeft:"50px" }}>
            Learn More{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
            
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt=''/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "20px" }}
              alt=''/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;