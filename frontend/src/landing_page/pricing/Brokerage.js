import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const tabStyle = (tab) => ({
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "400",
    color: activeTab === tab ? "#387ed1" : "#666",
    padding: "15px 48px",
    borderBottom:
      activeTab === tab
        ? "2px solid #387ed1"
        : "2px solid transparent",
  });

  return (
    <div className="container mt-4 mb-5">

      {/* ================= TABS ================= */}

      <div
        className="d-flex"
        style={{
          borderBottom: "1px solid #ddd",
        }}
      >
        <div
          style={tabStyle("equity")}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </div>

        <div
          style={tabStyle("currency")}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </div>

        <div
          style={tabStyle("commodity")}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </div>
      </div>

      {/* ================= EQUITY ================= */}

      {activeTab === "equity" && (
        <div
          className="mt-4 text-muted"
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <table className="table mb-0" style={{fontSize:"12px"}}>
            <thead>
              <tr>
                <th></th>
                <th className='text-muted'>Equity delivery</th>
                <th className='text-muted'>Equity intraday</th>
                <th className='text-muted'>F&amp;O - Futures</th>
                <th className='text-muted'>F&amp;O - Options</th>
              </tr>
            </thead>

            <tbody>

              {/* Brokerage */}

              <tr>
                <td>Brokerage</td>

                <td>Zero Brokerage</td>

                <td>
                  0.03% or Rs. 20/executed
                  <br />
                  order whichever is lower
                </td>

                <td>
                  0.03% or Rs. 20/executed
                  <br />
                  order whichever is lower
                </td>

                <td>
                  Flat Rs. 20 per executed order
                </td>
              </tr>

              {/* STT */}

              <tr>
                <td>STT/CTT</td>

                <td>
                  0.1% on buy &amp; sell
                </td>

                <td>
                  0.025% on the sell side
                </td>

                <td>
                  0.05% on the sell side
                </td>

                <td>
                  <ul className="mb-0">
                    <li>
                      0.15% of the intrinsic value on options
                      that are bought and exercised
                    </li>

                    <li>
                      0.15% on sell side (on premium)
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Transaction Charges */}

              <tr>
                <td>
                  Transaction
                  <br />
                  charges
                </td>

                <td>
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>

                <td>
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>

                <td>
                  NSE: 0.00183%
                  <br />
                  BSE: 0
                </td>

                <td>
                  NSE: 0.03553% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>

              {/* GST */}

              <tr>
                <td>GST</td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>
              </tr>

              {/* SEBI */}

              <tr>
                <td>SEBI charges</td>

                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

              {/* Stamp */}

              <tr>
                <td>
                  Stamp
                  <br />
                  charges
                </td>

                <td>
                  0.015% or ₹1500 / crore on buy side
                </td>

                <td>
                  0.003% or ₹300 / crore on buy side
                </td>

                <td>
                  0.002% or ₹200 / crore on buy side
                </td>

                <td>
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      )}

      {/* ================= CURRENCY ================= */}

      {activeTab === "currency" && (
        <div
          className="mt-4"
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <table className="table mb-0" style={{fontSize:"12px"}}>

            <thead>
              <tr>
                <th></th>
                <th className='text-muted'>Currency futures</th>
                <th className='text-muted'>Currency options</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Brokerage</td>

                <td>
                  0.03% or ₹20/executed order whichever is lower
                </td>

                <td>
                  ₹20/executed order
                </td>
              </tr>

              <tr>
                <td>STT/CTT</td>

                <td>No STT</td>
                <td>No STT</td>
              </tr>

              <tr>
                <td>Transaction charges</td>

                <td>
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>

                <td>
                  NSE: 0.0311%
                  <br />
                  BSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>
              </tr>

              <tr>
                <td>SEBI charges</td>

                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

              <tr>
                <td>Stamp charges</td>

                <td>
                  0.0001% or ₹10 / crore on buy side
                </td>

                <td>
                  0.0001% or ₹10 / crore on buy side
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      )}

      {/* ================= COMMODITY ================= */}

      {activeTab === "commodity" && (
        <div
          className="mt-4"
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <table className="table mb-0" style={{fontSize:"12px"}}>

            <thead>
              <tr>
                <th></th>
                <th className='text-muted'>Commodity futures</th>
                <th className='text-muted'>Commodity options</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Brokerage</td>

                <td>
                  0.03% or Rs. 20/executed order whichever is lower
                </td>

                <td>
                  ₹20/executed order
                </td>
              </tr>

              <tr>
                <td>STT/CTT</td>

                <td>
                  0.01% on sell side (Non-Agri)
                </td>

                <td>
                  0.05% on sell side
                </td>
              </tr>

              <tr>
                <td>Transaction charges</td>

                <td>
                  MCX: 0.0021%
                  <br />
                  NSE: 0.0001%
                </td>

                <td>
                  MCX: 0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>

              <tr>
                <td>GST</td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>

                <td>
                  18% on (brokerage + SEBI charges +
                  transaction charges)
                </td>
              </tr>

              <tr>
                <td>SEBI charges</td>

                <td>
                  Agri:
                  <br />
                  ₹1 / crore
                  <br />
                  Non-agri:
                  <br />
                  ₹10 / crore
                </td>

                <td>
                  ₹10 / crore
                </td>
              </tr>

              <tr>
                <td>Stamp charges</td>

                <td>
                  0.002% or ₹200 / crore on buy side
                </td>

                <td>
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      )}

      


      {/* ================= ACCOUNT OPENING CHARGES ================= */}

<div className="mt-5 pt-5">

  <h3
    className="mb-4"
    style={{
      fontSize: "24px",
      fontWeight: "500",
      color: "#424242",
    }}
  >
    Charges for account opening
  </h3>

  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "4px",
      overflow: "hidden",
      color: "#9b9696"
    }}
  >
    <table
      className="table mb-0"
      style={{
        fontSize: "14px",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              width: "65%",
              color: "#424242"
            }}
          >
            Type of account
          </th>

          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              color: "#424242"
            }}
          >
            Charges
          </th>
        </tr>
      </thead>

      <tbody>

        {/* Individual account */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242"}}>
            Individual account
          </td>

          <td style={{ padding: "16px 18px" }}>
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "4px 10px",
                borderRadius: "2px",
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              FREE
            </span>
          </td>
        </tr>

        {/* Minor account */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Minor account
          </td>

          <td style={{ padding: "16px 18px" }}>
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "4px 10px",
                borderRadius: "2px",
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              FREE
            </span>
          </td>
        </tr>

        {/* NRI account */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242"}}>
            NRI account
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            ₹ 500
          </td>
        </tr>

        {/* HUF account */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            HUF account
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "4px 10px",
                borderRadius: "2px",
                fontSize: "10px",
                fontWeight: "500",
                marginRight: "6px",
              }}
            >
              FREE
            </span>

            (online) / ₹ 500 (offline)
          </td>
        </tr>

        {/* Partnership */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Partnership, LLP, and Corporate accounts (offline only)
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            ₹ 500
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>




{/* ================= DEMAT AMC ================= */}

<div className="mt-5 pt-4">

  <h3
    className="mb-5"
    style={{
      fontSize: "24px",
      fontWeight: "500",
      color: "#424242",
    }}
  >
    Demat AMC (Annual Maintenance Charge)
  </h3>

  {/* Free first year box */}
  <div
    className="mb-4"
    style={{
      display: "inline-block",
      backgroundColor: "#f5f8fb",
      borderLeft: "4px solid #387ed1",
      padding: "12px 20px",
      fontSize: "15px",
      color: "#424242",
    }}
  >
    Free for first year*
  </div>

  <p
    className="mb-3"
    style={{
      fontSize: "13px",
      color: "#424242",
    }}
  >
    From second year onwards, for BSDA accounts:
  </p>

  {/* AMC Table */}
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "4px",
      overflow: "hidden",
    }}
  >
    <table
      className="table mb-0"
      style={{
        fontSize: "14px",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              width: "45%",
              color: "#696666"
            }}
          >
            Value of holdings
          </th>

          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              color: "#696666"
            }}
          >
            AMC
          </th>
        </tr>
      </thead>

      <tbody>

        {/* Up to 4 lakh */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#696666" }}>
            Up to ₹4 lakh
          </td>

          <td style={{ padding: "16px 18px" }}>
            <span
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "2px",
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              FREE
            </span>
          </td>
        </tr>

        {/* 4 lakh - 10 lakh */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#696666" }}>
            ₹4 lakh – ₹10 lakh
          </td>

          <td style={{ padding: "16px 18px", color: "#696666" }}>
            ₹100 per year + 18% GST, charged quarterly
          </td>
        </tr>

        {/* Above 10 lakh */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#696666" }}>
            Above ₹10 lakh
          </td>

          <td style={{ padding: "16px 18px", color: "#696666" }}>
            ₹300 per year + 18% GST, charged quarterly
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  {/* Information below table */}
  <p
    className="mt-3"
    style={{
      fontSize: "13px",
      color: "#424242",
    }}
  >
    For a non-BSDA account, AMC is ₹300 per year + 18% GST,
    regardless of holdings value, charged quarterly.
  </p>

  <p
    className="mt-4"
    style={{
      fontSize: "13px",
      color: "#424242",
    }}
  >
    To learn more about BSDA,{" "}
    <a href="https://support.zerodha.com/category/account-opening/resident-individual/ri-online/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
      style={{
        color: "#387ed1",
        cursor: "pointer",
        textDecoration:"none"
      }}
    >
      click here.
    </a>{" "}

    To learn more about AMC,{" "}
    <a href="https://support.zerodha.com/category/account-opening/resident-individual/ri-online/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
      style={{
        color: "#387ed1",
        cursor: "pointer",
        textDecoration:"none"
      }}
    >
      click here.
    </a>
  </p>

  <p
    className="mt-4"
    style={{
      fontSize: "12px",
      color: "#424242"
    }}
  >
    *Resident individual accounts only.
  </p>

</div>






{/* ========== OPTIONAL VALUE ADDED SERVICES ========== */}

<div className="mt-5 pt-4">

  <h3
    className="mb-4"
    style={{
      fontSize: "24px",
      fontWeight: "500",
      color: "#424242",
    }}
  >
    Charges for optional value added services
  </h3>

  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "4px",
      overflow: "hidden",
    }}
  >
    <table
      className="table mb-0"
      style={{
        fontSize: "14px",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              width: "22%",
              color: "#424242"
            }}
          >
            Service
          </th>

          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              width: "40%",
              color: "#424242"
            }}
          >
            Billing Frequency
          </th>

          <th
            style={{
              padding: "16px 18px",
              fontWeight: "500",
              color: "#424242"
            }}
          >
            Charges
          </th>
        </tr>
      </thead>

      <tbody>

        {/* Tickertape */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Tickertape
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Monthly / Quarterly / Annual
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Free: 0 | Pro: 249/699/2399
          </td>
        </tr>

        {/* Smallcase */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Smallcase
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Per transaction
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Buy &amp; Invest More: 100 | SIP: 10
          </td>
        </tr>

        {/* Kite Connect */}
        <tr>
          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Kite Connect
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Monthly
          </td>

          <td style={{ padding: "16px 18px", color: "#424242" }}>
            Connect: 500 | Personal: Free
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>




{/* ================= CHARGES EXPLAINED ================= */}

<div
  className="container mt-5 pt-4"
  style={{
    color: "#424242",
    fontSize: "12px",
    lineHeight: "1.75",
    fontWeight: "400",
  }}
>
  {/* Main Heading */}
  <h3
    className="mb-5"
    style={{
      fontSize: "24px",
      fontWeight: "400",
      color: "#424242",
    }}
  >
    Charges explained
  </h3>

  <div className="row gx-5">
    {/* ================= LEFT COLUMN ================= */}

    <div className="col-md-6">
      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "0",
          marginBottom: "14px",
        }}
      >
        Securities/Commodities transaction tax
      </h5>

      <p>
        Tax by the government when transacting on the exchanges. Charged as
        above on both buy and sell sides when trading equity delivery.
        Charged only on selling side when trading intraday or on F&amp;O.
      </p>

      <p>
        When trading at Zerodha, STT/CTT can be a lot more than the brokerage
        we charge. Important to keep a tab.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Transaction/Turnover Charges
      </h5>

      <p>
        Charged by exchanges (NSE, BSE, MCX) on the value of your
        transactions.
      </p>

      <p>
        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
        ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged
        into a new group X w.e.f 01.12.2017)
      </p>

      <p>
        BSE has revised transaction charges in SS and ST groups to ₹1,00,000
        per crore of gross turnover.
      </p>

      <p>
        BSE has revised transaction charges for group A, B and other
        non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
        W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
        December 1, 2022.
      </p>

      <p>
        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275
        per crore of gross turnover.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Call &amp; trade
      </h5>

      <p>
        Additional charges of ₹50 per order for orders placed through a dealer
        at Zerodha including auto square off orders.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Stamp charges
      </h5>

      <p>
        Stamp charges by the Government of India as per the Indian Stamp Act
        of 1899 for transacting in instruments on the stock exchanges and
        depositories.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        NRI brokerage charges
      </h5>

      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          fontSize: "12px",
          lineHeight: "1.8",
        }}
      >
        <li>
          For a non-PIS account, 0.5% or ₹50 per executed order for equity and
          F&amp;O (whichever is lower).
        </li>

        <li>
          For a PIS account, 0.5% or ₹200 per executed order for equity
          (whichever is lower).
        </li>

        <li>
          ₹500 + GST as yearly account maintenance charges (AMC) charges.
        </li>
      </ul>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Account with debit balance
      </h5>

      <p>
        Accounts with a debit balance will be charged an additional ₹20 per
        executed order.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Charges for Investor's Protection Fund Trust (IPFT) by NSE
      </h5>

      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          fontSize: "12px",
          lineHeight: "1.8",
        }}
      >
        <li>
          Equity and Futures - ₹0.01 per crore + GST of the traded value.
        </li>

        <li>
          Options - ₹0.01 per crore + GST traded value (premium value).
        </li>

        <li>
          Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
          lakh + GST of premium for Options.
        </li>
      </ul>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Margin Trading Facility (MTF)
      </h5>

      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          fontSize: "12px",
          lineHeight: "1.8",
        }}
      >
        <li>
          MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
          interest is applied from T+1 day until the day MTF stocks are sold.
        </li>

        <li>
          MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
        </li>

        <li>
          MTF pledge charge: ₹15 + GST per pledge and unpledge request per
          ISIN.
        </li>
      </ul>
    </div>

    {/* ================= RIGHT COLUMN ================= */}

    <div className="col-md-6">
      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "0",
          marginBottom: "14px",
        }}
      >
        GST
      </h5>

      <p>
        Tax levied by the government on the services rendered. 18% of
        (brokerage + SEBI charges + transaction charges)
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        SEBI Charges
      </h5>

      <p>
        Charged at ₹10 per crore + GST by Securities and Exchange Board of
        India for regulating the markets.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        DP (Depository participant) charges
      </h5>

      <p>
        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
        charged on the trading account ledger when stocks are sold,
        irrespective of quantity.
      </p>

      <p>
        Female demat account holders (as first holder) will enjoy a discount
        of ₹0.25 per transaction on the CDSL fee.
      </p>

      <p>
        Debit transactions of mutual funds &amp; bonds get an additional
        discount of ₹0.25 on the CDSL fee.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Pledging charges
      </h5>

      <p>₹30 + GST per pledge request per ISIN.</p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        AMC (Account maintenance charges)
      </h5>

      <p>
        Free for the first year on all new resident individual accounts.
      </p>

      <p>
        For BSDA demat account: Zero charges if the holding value is less than
        ₹4,00,000. To learn more about BSDA,{" "}
        <a
          href="https://support.zerodha.com/category/console/ledger/articles/interest-charges"
          style={{
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          Click here
        </a>
      </p>

      <p>
        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
        (90 days). To learn more about AMC,{" "}
        <a
          href="https://support.zerodha.com/category/console/ledger/articles/interest-charges"
          style={{
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          Click here
        </a>
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Corporate action order charges
      </h5>

      <p>
        ₹20 plus GST will be charged for OFS / buyback / takeover / delisting
        orders placed through Console.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Off-market transfer charges
      </h5>

      <p>₹25 per transaction.</p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Physical CMR request
      </h5>

      <p>
        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
        subsequent requests.
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Payment gateway charges
      </h5>

      <p>₹9 + GST (Not levied on transfers done via UPI)</p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Delayed Payment Charges
      </h5>

      <p>
        Interest is levied at 18% a year or 0.05% per day on the debit balance
        in your trading account.{" "}
        <a
          href="https://support.zerodha.com/category/console/ledger/articles/interest-charges"
          style={{
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          Learn more.
        </a>
      </p>

      <h5
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#424242",
          marginTop: "25px",
          marginBottom: "14px",
        }}
      >
        Trading using 3-in-1 account with block functionality
      </h5>

      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          fontSize: "12px",
          lineHeight: "1.8",
        }}
      >
        <li>
          Delivery &amp; MTF Brokerage: 0.5% per executed order.
        </li>

        <li>
          Intraday Brokerage: 0.05% per executed order.
        </li>
      </ul>
    </div>
  </div>

  {/* ================= DISCLAIMER ================= */}

  <div
    style={{
      marginTop: "40px",
      marginBottom: "60px",
    }}
  >
    <h5
      style={{
        fontSize: "16px",
        fontWeight: "400",
        color: "#424242",
        marginBottom: "20px",
      }}
    >
      Disclaimer
    </h5>

    <p
      style={{
        fontSize: "11px",
        lineHeight: "1.8",
        color: "#424242",
        fontWeight: "400",
        marginBottom: "0",
      }}
    >
      For Delivery based trades, a minimum of ₹0.01 will be charged per
      contract note. Clients who opt to receive physical contract notes will
      be charged ₹20 per contract note plus courier charges. Brokerage will
      not exceed the rates specified by SEBI and the exchanges. All statutory
      and regulatory charges will be levied at actuals. Brokerage is also
      charged on expired, exercised, and assigned options contracts. Free
      investments are available only for our retail individual clients.
      Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
      (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
      contract value will be charged for contracts where physical delivery
      happens. For netted off positions in physically settled contracts, a
      brokerage of 0.1% will be charged.
    </p>
  </div>
</div>



    </div>
  );
}

export default Brokerage;