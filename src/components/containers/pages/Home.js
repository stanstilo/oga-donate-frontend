import React from "react";
import { Link } from "react-router-dom";
import FeaturedCauses from "components/FeaturedCauses";
import Categories from "components/Categories";
import BuyToSupport from "components/BuyToSupport";
import ImageSlider from "components/ImageSlider";
import Counter from "components/Counter";


class Home extends React.Component {
  render() {
    return (
      <>
        <ImageSlider />
        <Categories />
        <FeaturedCauses />
        <BuyToSupport />
        <Counter />
      </>
    );
  }
}

export default Home;
