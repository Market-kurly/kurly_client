import React from "react";
import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";

const Delivery = (props) =>{
    const {purchase, price} = props;

    const productPrice = purchase * price;
    const totalPrice = productPrice + 2500;
    return(
        <React.Fragment>
            <Grid width="284px"  margin="70px 20px">
                <Grid height="174px"padding="23px 19px 20px"  border="1px solid #f2f2f2">
                    <Text size="16px" weight="700" color="#4c4c4c">배송지</Text>
                    <Text size="16px" weight="700" color="#4c4c4c">부산시 북구 해운대로 10번길 11</Text>
                    <Text color="#666" fontsize="14px">택배배송</Text>
                    <Button height="36px" fontsize="12px" margin="17px 0px 0px 0px"
                    border="1px solid #5f0080" font_color=" #5f0080" border_radius="3px"
                    >배송지변경</Button>
                </Grid>
                <Grid height="220px" padding=" 9px 18px 18px 20px"
                border="1px solid #f2f2f2"
                bgcolor="#fafafa"
                >
                    <Grid display="flex"  padding="9px 0px 0px" justify="space-between">
                        <Text size="16px" weight="700" color="#4c4c4c">상품금액</Text>
                        <Text size="16px" weight="700" color="#4c4c4c">{productPrice}원</Text>
                    </Grid>
                    <Grid display="flex" padding="9px 0px 0px" justify="space-between">
                        <Text size="16px"weight="700"  color="#4c4c4c">상품할인금액</Text>
                        <Text size="16px"weight="700"  color="#4c4c4c">0원</Text>
                    </Grid>
                    <Grid display="flex"  padding="9px 0px" justify="space-between">
                        <Text size="16px"weight="700"  color="#4c4c4c">배송비</Text>
                        <Text size="16px"weight="700"  color="#4c4c4c">+2,500원</Text>
                    </Grid>
                   
                   <hr style={{border:"1px solid #f2f2f2"}}></hr>
                    <Grid display="flex"  padding="17px 0px 0px" justify="space-between"
                    margin="17px 0 0 " 
                    >
                    
                        <Text size="16px" lineHeight="1.8" weight="700"  color="#4c4c4c">결제예정금액</Text>
                        <Text size="22px"weight="700"  color="#4c4c4c">{totalPrice}원</Text>
                    </Grid>
                </Grid>
                <Grid padding="20px 0px 0px">
                    <Button border="none" width="284px" height="56px" border_radius="3px"
                    font_color="white" background_color="#5f0080"
                    fontsize="16px"
                    _onClick={()=>{
                        history.push('/order')
                    }}
                    >주문하기</Button>
                </Grid>
            </Grid>
            
              
        </React.Fragment>
    )
}

Delivery.defaultProps = {
    
}
export default Delivery;