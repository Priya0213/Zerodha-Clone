import React from "react";

function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#f6f6f6",
        padding: "40px 0",
        marginTop: "60px",
      }}
    >
      <div className="container">
        {/* Heading + My Tickets */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            style={{
              color: "#424242",
              fontSize: "28px",
              fontWeight: "500",
              margin: 0,
            }}
          >
            Support Portal
          </h2>

          <button
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "10px 18px",
              fontSize: "14px",
            }}
          >
            My tickets
          </button>
        </div>

        {/* Search Box */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            height: "58px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              fontSize: "16px",
              color: "#424242",
              marginRight: "15px",
            }}
          ></i>

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "15px",
              color: "#424242",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;