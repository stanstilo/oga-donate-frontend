import React from "react";
import SupportCards from "../components/SupportCards";

const BuyToSupport = () => {
  return (
    <>
      <div className="support-headline text-center">
        <h1 className="text-capitalize">buy to support</h1>
      </div>

      <div className="feature">
        <div className="feat-row">
          <div className="col-12 col-md-6 col-lg-4">
            <SupportCards />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SupportCards />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SupportCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default  BuyToSupport;
