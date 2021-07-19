import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";
import {Grid, Image, Text, Button} from "../elements"
import CountNum from "../components/CountNum";

const Detail = (props) =>{
    // const dispatch = useDispatch();
    // const product_id = props.match.params.id;
    // const product = useSelector(state=> state.product.product);

    const [purchaseNum, setPurchaseNum] = React.useState(1);
 
    // React.useEffect(()=>{
    //     dispatch(productActions.getOneProductSV(product_id));
    // },[]);


    const {productImg, productName, price, amount, unit, delivery, packing, expiryDate, country, infromation, keeping} = props;
    let totalPrice = price * purchaseNum;
    return (
        <React.Fragment>
            <Grid display="flex" width="1050px" padding="20px 0px" margin="0 auto">
                <Image width="430px" height="552px" src="https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg"></Image>
                <Grid  width="620px" float="right">
                    <Grid  padding="0px 60px" >
                    <Grid padding="0px 0px 29px">
                        <Text margin="20px 0px 0px 0px"size="24px">{productName}</Text>
                        <Text margin="4px 60px 0px 0px" color="#999" padding="4px 60px 0 0">{infromation}</Text>
                    </Grid>
                    <Grid>
                        <Text margin="0px" size="28px">{price}원</Text>
                        <Text margin="0px"padding="7px 0px "color="#5f0080">로그인후, 적립혜택이 제공됩니다.</Text>
                    </Grid>
                    <Grid>
                        <Grid margin="0px"display="flex"padding="18px 0px 0px 0px" >
                            <Text width="150px"margin="0px" color="#666">판매단위</Text>
                            <Text margin="0px">{unit}</Text>
                        </Grid>
                        <Grid margin="0px" display="flex" padding="18px 0px ">
                           <Text width="150px" margin="0px" color="#666">중량/용량</Text>
                           <Text margin="0px">{amount}</Text>
                        </Grid>
                        <Grid margin="0px" display="flex" padding="18px 0px"> 
                            <Text width="150px" margin="0px" color="#666">배송구분</Text>
                            <Text margin="0px">{delivery}</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px ">
                          <Text width="150px" margin="0px"  color="#666">포장타입</Text>
                          <Text margin="0px" >{packing}</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                          <Text width="150px" margin="0px"  color="#666">원산지</Text>
                          <Text margin="0px" >{country}</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                            <Text width="150px" margin="0px" color="#666">유통기한</Text>
                            <Text margin="0px">{expiryDate}</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                            <Text width="150px"margin="0px"color="#666">구매수량</Text>
                            <CountNum num={purchaseNum} setNum={setPurchaseNum}></CountNum>
                          
                            
                        </Grid>
                        <Grid display="flex" justify="flex-end">
                            <Text lineHeight="60px" margin="0px 10px" size="13px">총상품금액:</Text>
                            <Text margin="0px" size="32px" weight="800">{totalPrice} 원</Text>
                          
                        </Grid>
                        <Grid display="flex">
                            <Button 
                            
                            fontsize="16px"
                            font_color="#d5d5d5"
                            margin="0px 12px 0px 0px"
                            width="138px" height="56px"
                            border_radius="3px" background_color="#fff" border="1px solid #d5d5d5"
                            >재입고 알림</Button>
                            <Button
                              fontsize="16px"
                              font_color="white"
                             height="56px"
                             background_color="#5f0080"
                             border_radius="3px" 
                             border="0px"
                             >장바구니 담기</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                   
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Detail.defaultProps = {
    productImg : "default",
    productName : "default",
    price : "2000",
    amount : "default",
    unit: "default",
    delivery : "default",
    packing : "default",
    expiryDate : "default",
    country : "default",
    infromation : "default",
    keeping: "default",
}



export default Detail;