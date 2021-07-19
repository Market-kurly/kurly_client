import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kurly_1 from "../image/kurly1.png";
import kurly_2 from "../image/kurly2.png";
import kurly_3 from "../image/kurly3.png";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { actionCreators as mainlistActions } from "../redux/modules/mainlist";

const Main = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

//   const dispatch = useDispatch();
//   const product_list = useSelector((state) => state.list.product_list);

// //   useEffect(() => {
// //     dispatch(userActions.loginCheckDB());
// //     dispatch(listActions.getProductsDB());
// //   }, []);

  return (
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
      
    </div>
    
  );
};

const IMG = styled.img`
  width: 100%;
`;

const SubTitle = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  font-weight: bold;
`;

export default Main;
