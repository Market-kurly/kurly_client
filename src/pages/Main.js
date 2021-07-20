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
     
      <GridBox>
        {
          product_list.map((p) =>{
            return(
              <Product  key={p.productId} {...p}></Product>
            )
          })
        }
      </GridBox>
    </div>
    </React.Fragment>
    
  );
};

const GridBox = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns : repeat(4, 1fr);
  max-width: 1050px;

`;

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
  padding: 79px 0 35px;
`;

const Grid2 = styled.div`
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  color: black;
  background-color: #ffffff;
  height: auto;
  border-radius: 20px;
  border: none;
  box-shadow: 5px 5px #e5e5e3;
`;

export default Main;
