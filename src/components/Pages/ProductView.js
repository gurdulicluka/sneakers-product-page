import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SneakerImages from "../Sneakers/SneakerImages";
import SneakerInfo from "../Sneakers/SneakerInfo";
import classes from "./ProductView.module.css";
import data from "../../data";
import ImageCarousel from "../UI/ImageCarousel";

const ProductView = (props) => {
  const [product] = useState(data.find((sneaker) => sneaker.id === 1));
  //Don't need setProduct for now, only this item exists in the data

  const carouselImages = product.images.map((img) => {
    return (
      <div key={img.id}>
        <img src={img.fullSize} alt="" />
      </div>
    );
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <main className={classes["product-view"]}>
      {isTabletOrMobile ? (
        <ImageCarousel>{carouselImages}</ImageCarousel>
      ) : (
        <SneakerImages sneakers={product} />
      )}
      <SneakerInfo sneakers={product} />
    </main>
  );
};

export default ProductView;
