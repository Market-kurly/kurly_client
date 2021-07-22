import React from "react";
import styled from "styled-components";
import { Image } from "../elements";

const OrderProduct = (props) =>{
    const cart = props;
    return(
        <React.Fragment>
            <Li>
                <Thumb>
                    <Image width="68px" heieght="68px" src={cart.productImg}></Image>
                </Thumb>
                <Name>{cart.productName}</Name>
                <EA>{cart.purchase}개 </EA>
                <Price>{(cart.price * cart.purchase).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Price>
            </Li>
            

        </React.Fragment>
    )
}

const Li = styled.li`
overflow: hidden;
height: 128px;
border-bottom: 1px solid #f4f4f4;
list-style-type: none;

`;

const Thumb = styled.div`
overflow: hidden;
float: left;
width: 60px;
height: 78px;
margin: 25px 20px 0 0;
background-color: #f4f4f4;
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: cover;

`;

const Name = styled.div`
display: table;
float: left;
width: 739px;
height: 100%;
padding-top: 52px;
display: table-cell;
font-weight: 700;
font-size: 16px;
color: #000;
line-height: 24px;
vertical-align: middle;
text-align: left;
`;

const EA = styled.div`
float: left;
width: 100px;
height: 100%;
padding-top: 52px;
color: #333;
line-height: 24px;
text-align: center;
letter-spacing: -.22px;
font-size: 16px;
font-weight: 700;
`;

const Price = styled.div`
display: table;
padding-top: 50px;
margin-top: 4px;
    float: right;
    width: 120px;
    height: 100%;
    padding-right: 4px;
    font-size: 16px;
    font-weight: 700;
`;

export default OrderProduct;