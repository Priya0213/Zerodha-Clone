import React from "react";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "#555",
    fontSize: "14px",
    display: "block",
    marginBottom: "12px",
  };

  const iconStyle = {
    textDecoration: "none",
    color: "#666",
    fontSize: "20px",
  };

  const legalLinkStyle = {
    color: "#387ed1",
    textDecoration: "none",
  };

  const paragraphStyle = {
    marginBottom: "14px",
  };

  return (
    <footer
      className="mt-5"
      style={{ backgroundColor: "rgb(238, 237, 237)" }}
    >
      <div className="container border-top py-4">

        {/* ================= FOOTER COLUMNS ================= */}
        <div className="row gx-5">

          {/* Logo + Copyright */}
          <div className="col">
            <img
              src="/media/images/logo.svg"
              style={{ width: "60%" }}
              alt="Zerodha"
            />

            <p
              className="mt-3"
              style={{
                fontSize: "12px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons - First Row */}
            <div className="d-flex gap-4">

              
               <a
                href="https://x.com/zerodha"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              
              
              
              <a
                href="https://www.facebook.com/zerodha.social"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/zerodhaonline/"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/zerodha"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

            </div>

            {/* Social Icons - Second Row */}
            <div className="d-flex gap-4 mt-4">

              <a
                href="https://www.youtube.com/@zerodhaonline"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a
                href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://t.me/zerodhain"
                style={iconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>

            </div>

            {/* App Store Badges */}
            <div className="d-flex gap-2 mt-3">

              <img
                src="/media/images/google-play-badge-light.svg"
                alt="Google Play"
                style={{ width: "110px" }}
              />

              <img
                src="/media/images/appstore-badge-light.svg"
                alt="App Store"
                style={{ width: "110px" }}
              />

            </div>
          </div>


          {/* ================= ACCOUNT ================= */}

          <div className="col">
            <h5 className="mb-4" style={{ color: "#393838" }}>Account</h5>

            <span style={linkStyle}>Open demat account</span>
            <span style={linkStyle}>Minor demat account</span>
            <span style={linkStyle}>NRI demat account</span>
            <span style={linkStyle}>HUF demat account</span>
            <span style={linkStyle}>Commodity</span>
            <span style={linkStyle}>Dematerialisation</span>
            <span style={linkStyle}>Fund transfer</span>
            <span style={linkStyle}>MTF</span>
          </div>


          {/* ================= SUPPORT ================= */}

          <div className="col">
            <h5 className="mb-4" style={{ color: "#393838" }}>Support</h5>

            <span style={linkStyle}>Contact us</span>
            <span style={linkStyle}>Support portal</span>
            <span style={linkStyle}>How to file a complaint?</span>
            <span style={linkStyle}>Status of your complaints</span>
            <span style={linkStyle}>Bulletin</span>
            <span style={linkStyle}>Circular</span>
            <span style={linkStyle}>Z-Connect blog</span>
            <span style={linkStyle}>Downloads</span>
          </div>


          {/* ================= COMPANY ================= */}

          <div className="col">
            <h5 className="mb-4" style={{ color: "#393838" }}>Company</h5>

            <span style={linkStyle}>About</span>
            <span style={linkStyle}>Philosophy</span>
            <span style={linkStyle}>Press & media</span>
            <span style={linkStyle}>Careers</span>
            <span style={linkStyle}>Zerodha Cares (CSR)</span>
            <span style={linkStyle}>Zerodha.tech</span>
            <span style={linkStyle}>Open source</span>
            <span style={linkStyle}>Referral program</span>
          </div>


          {/* ================= QUICK LINKS ================= */}

          <div className="col">
            <h5 className="mb-4" style={{ color: "#393838" }}>Quick links</h5>

            <span style={linkStyle}>Upcoming IPOs</span>
            <span style={linkStyle}>Brokerage Charges</span>
            <span style={linkStyle}>Market holidays</span>
            <span style={linkStyle}>Economic Calendar</span>
            <span style={linkStyle}>Calculators</span>
            <span style={linkStyle}>Markets</span>
            <span style={linkStyle}>Security</span>
            <span style={linkStyle}>Gift Nifty</span>
          </div>

        </div>


        {/* ================= LEGAL INFORMATION ================= */}

        <div
          className="mt-4"
          style={{
            fontSize: "12px",
            color: "#999",
            lineHeight: "1.7",
          }}
        >

          <p style={paragraphStyle}>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to{" "}

            <a
              href="mailto:complaints@zerodha.com"
              style={legalLinkStyle}
            >
              complaints@zerodha.com
            </a>

            , for DP related to{" "}

            <a
              href="mailto:dp@zerodha.com"
              style={legalLinkStyle}
            >
              dp@zerodha.com
            </a>

            . Please ensure you carefully read the Risk Disclosure Document
            as prescribed by SEBI | ICF
          </p>


          <p style={paragraphStyle}>
            Procedure to file a complaint on{" "}

            <a href="/#" style={legalLinkStyle}>
              SEBI SCORES/SMARTODR
            </a>

            : Register on SCORES portal & SMARTODR. Mandatory details for
            filing complaints on SCORES: Name, PAN, Address, Mobile Number,
            E-mail ID. Benefits: Effective Communication, Speedy redressal
            of grievances.
          </p>


          <p style={paragraphStyle}>

            <a href="/#" style={legalLinkStyle}>
              Smart Online Dispute Resolution
            </a>

            {" | "}

            <a href="/#" style={legalLinkStyle}>
              Grievances Redressal Mechanism
            </a>

          </p>


          <p style={paragraphStyle}>
            Investments in securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>


          <p style={paragraphStyle}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository
            system w.e.f September 01, 2020. 2) Update your e-mail and phone
            number with your stock broker / depository participant and receive
            OTP directly from depository on your e-mail and/or mobile number
            to create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>


          <p style={paragraphStyle}>
            India's largest broker based on networth as per NSE.{" "}

            <a href="/#" style={legalLinkStyle}>
              NSE broker factsheet
            </a>

          </p>


          


          <p style={paragraphStyle}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR,
            or arbitration mechanism for such products.
          </p>


          <p style={{ marginBottom: "0" }}>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely
            as a distributor for these products. Any disputes arising with
            respect to such distribution activity will not have access to
            SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum,
            or Arbitration mechanism. Fixed deposits are regulated by the
            Reserve Bank of India (RBI).
          </p>

        </div>

        {/* Bottom Footer Links */}
<div
  className="d-flex justify-content-center flex-wrap gap-4 mt-2 pt-2"
  style={{
    fontSize: "12px",
    color: "#999",
  }}
>
  <span>NSE</span>
  <span>BSE</span>
  <span>MCX</span>
  <span>MSEI</span>
  <span>Terms & conditions</span>
  <span>Policies & procedures</span>
  <span>Privacy policy</span>
  <span>Disclosure</span>
  <span>For investor's attention</span>
  <span>Investor charter</span>
  <span>Sitemap</span>
</div>

      </div>
    </footer>
  );
}

export default Footer;