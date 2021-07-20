import React, { Component, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kurly_1 from "../image/kurly1.png";
import kurly_2 from "../image/kurly2.png";
import kurly_3 from "../image/kurly3.png";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";
import Product from "../components/Product";

const Main = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const dispatch = useDispatch();
  const product_list = useSelector((state) => state.product.product_list);

  useEffect(() => {
    dispatch(productActions.getProductSV());
  }, []);

  return (
    <React.Fragment>
      <div>
        <Slider {...settings}>
          <div>
            <IMG src={kurly_1} alt={kurly_1} />
          </div>
          <div>
            <IMG src={kurly_2} alt={kurly_2} />
          </div>
          <div>
            <IMG src={kurly_3} alt={kurly_3} />
          </div>
        </Slider>
        <SubTitle>이 상품 어때요?</SubTitle>
        <div style={{ width:"1050px",  margin:"0 auto" , alignItems:"center" , justifyItems:"center"}}>
            {/* <GridBox display="flex"> */}
              <Slider {...products}>
              {product_list.map((p) => {
                return (
                  <Product key={p.productId} {...p}>
                  </Product>
                );
              })}</Slider>
            {/* </GridBox> */}
          </div>
        </div>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  /* justify-content: center;
  align-items: center;
  margin: 0 auto; */
  display: flex;
  /* grid-template-columns: repeat(4, 1fr); */
  /* max-width: 1050px; */
`;

const IMG = styled.img`
  width: 100%;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  font-weight: bold;
  padding: 79px 0 35px;
`;

export default Main;
