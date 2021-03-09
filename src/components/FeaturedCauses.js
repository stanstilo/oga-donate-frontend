import React from "react";
import Cards from "../components/Cards";

const FeaturedCauses = () => {
  return (
    <>
      <div className="feature-headline text-center">
        <h1 className="text-capitalize">Featured Causes</h1>
        <p>Campaign selected by our team</p>
      </div>

      <div className="feature">
        <div className="feat-row">
          <div className="col-12 col-md-6 col-lg-4">
            <Cards />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCauses;
