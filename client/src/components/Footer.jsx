import * as React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <a
          href="https://www.meherdevs.com"
          target={"_blank"}
          rel={"nonreferrer"}
          className="meherdevs"
        >
          <p
            style={{
              marginTop: "1.2em",
            }}
          >
            Made by MeherDevs | 2023
          </p>
        </a>
      </div>
    </>
  );
};

export default Footer;
