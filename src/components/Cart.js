import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import CountNum from "./CountNum";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) =>{
    const dispatch= useDispatch();
    const [purchaseNum, setPurchaseNum] = React.useState(1);
    const [fold, setFold] = React.useState(true);
    const [ischeck, setIsCheck] = React.useState(true);
   
    const {productImg, productName, price, purchase, keeping} = props;
    let totalPrice= price * purchase ; 
    // 숫자가 올라갈때 purchase도 바껴야함, 이것은 주문하기를 눌렀을때 해당 장바구니의 숫자를 수정해야하는 것
    // x를 눌렀을때는 장바구니내역 하나가 삭제되어야함

    
    return(
        <React.Fragment>
            <Grid width="742px" >
                <hr></hr>
                <Grid justify="space-between"display="flex" height="60px">
               
                    <Text size="18px"weight="700">{keeping}</Text>
                    <BtnFold fold={fold} onClick={()=>{setFold(!fold)}}></BtnFold>
                   
                </Grid>
                {
                    fold && 
                    <Grid alignitem="center" width="742px" display="flex" height="128px"  >
                     
                            <BtnCheck onClick={()=>{
                                setIsCheck(!ischeck);
                            }} ischeck={ischeck}></BtnCheck>
                            <Image margin="25px 0px"width="60px" height="78px" src={productImg}></Image>
                            <Text margin="0px 250px 0px 20px"lineHeight="128px"size="16px"weight="700">{productName}</Text>
                            <CountNum num ={purchase} setNum={setPurchaseNum}></CountNum>
                            <Text margin="0px 50px"size="16px" weight="bold" lineHeight="128px">{totalPrice}원</Text>
                            <BtnDelete></BtnDelete>

                       
                    </Grid>
                    
                }
             
             
            </Grid>
        </React.Fragment>
    )
}


Cart.defaultProps = {
    productImg : "https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg",
    productName : "상품이름",
    price : "22000",
    purchase : 2,
    keeping: "냉동상품"


}


const BtnCheck = styled.button`
    width: 24px;
    height: 24px;
    max-width: 100%;
    display: inline-block;
    text-align: center;
    text-transform: none;
    ${(props) => (props.ischeck?  ` background-image: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg");`: `background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg);`)}

    background-size: cover;
    background-position: center;
    background-color: #fff;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: 0 30px 0 0;
    padding: 0;
    & a:hover {
    cursor : pointer;
    }   
`;

const BtnFold = styled.button`
display: block;
overflow: hidden;
float: right;
width: 30px;
height: 30px;
border: 0;
background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_dropup.svg);
background-color: transparent;
background-repeat: no-repeat;
background-size: 30px 30px;
background-position: 50% 50%;
font-size: 0;
text-indent: -9999px;
${(props) => (props.fold?  "": `  transform: rotate(180deg);`)}
`;

const BtnDelete = styled.button`
right: 5px;
top: 50%;
width: 30px;
height: 30px;
padding: 0;
border: 0;
background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_delete.svg);
background-color: transparent;
background-repeat: no-repeat;
background-size: 30px 30px;
background-position: 50% 50%;
`;
export default Cart;
