import React, { useState } from "react";

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Account Opening",
      icon: "fa-regular fa-circle-plus",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-regular fa-circle-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-regular fa-circle-check",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General"
      ],
    },
    {
      title: "Funds",
      icon: "fa-solid fa-indian-rupee-sign",
      links: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      icon: "fa-regular fa-circle-dot",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments"
      ],
    },
    {
      title: "Coin",
      icon: "fa-regular fa-circle",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const linkStyle = {
    color: "#387ed1",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <section
      style={{
        padding: "45px 0 70px",
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        <div className="row">
          {/* ================= LEFT SIDE ================= */}

          <div className="col-lg-8 pe-lg-4">
            {sections.map((section, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e0e0e0",
                  marginBottom: "22px",
                  backgroundColor: "#fff",
                }}
              >
                {/* Accordion heading */}
                <div
                  onClick={() => toggleSection(index)}
                  style={{
                    minHeight: "60px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "60px",
                      minHeight: "60px",
                      alignSelf: "stretch",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #eee",
                      color: "#387ed1",
                      fontSize: "18px",
                    }}
                  >
                    <i className={section.icon}></i>
                  </div>

                  {/* Heading */}
                  <div
                    style={{
                      flex: 1,
                      paddingLeft: "14px",
                      fontSize: "16px",
                      color: "#424242",
                      fontWeight: "400",
                    }}
                  >
                    {section.title}
                  </div>

                  {/* Arrow */}
                  <div
                    style={{
                      paddingRight: "20px",
                      color: "#387ed1",
                      fontSize: "14px",
                    }}
                  >
                    <i
                      className={
                        openSection === index
                          ? "fa-solid fa-chevron-up"
                          : "fa-solid fa-chevron-down"
                      }
                    ></i>
                  </div>
                </div>

                {/* Accordion content */}
                {openSection === index && (
                  <div
                    style={{
                      padding: "18px 25px 20px 75px",
                      borderTop: "1px solid #eee",
                      backgroundColor: "#fff",
                    }}
                  >
                    {section.links.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        style={{
                          marginBottom:
                            linkIndex === section.links.length - 1
                              ? "0"
                              : "12px",
                        }}
                      >
                        <a href="#" style={linkStyle}>
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="col-lg-4 ps-lg-4">
            {/* Important Updates */}
            <div
              style={{
                backgroundColor: "#fff3e3",
                borderLeft: "6px solid #ff9100",
                padding: "15px 20px",
                marginBottom: "20px",
              }}
            >
              <ul
                style={{
                  paddingLeft: "18px",
                  margin: 0,
                  color: "#387ed1",
                  lineHeight: "1.8",
                }}
              >
                <li style={{ marginBottom: "8px" }}>
                  <a href="#" style={linkStyle}>
                    Commodities option contract expiry – September 2026
                  </a>
                </li>

                <li>
                  <a href="#" style={linkStyle}>
                    Electricity contract expiry – September 2026
                  </a>
                </li>
              </ul>
            </div>

            {/* ================= QUICK LINKS ================= */}

            <div
              style={{
                border: "1px solid #e5e5e5",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "14px 18px",
                  color: "#424242",
                  fontSize: "15px",
                }}
              >
                Quick links
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a href="#" style={linkStyle}>
                  1. Track account opening
                </a>
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a href="#" style={linkStyle}>
                  2. Track segment activation
                </a>
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a href="#" style={linkStyle}>
                  3. Intraday margins
                </a>
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a href="#" style={linkStyle}>
                  4. Kite user manual
                </a>
              </div>

              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid #eee",
                }}
              >
                <a href="#" style={linkStyle}>
                  5. Learn how to create a ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;