import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import CountNum from "./CountNum";

const Cart = (props) =>{
    const [purchaseNum, setPurchaseNum] = React.useState(1);
    const [fold, setFold] = React.useState(true);

    // productImg : "https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg",
    // productName : "상품이름",
    // price : "22000",
    // purchase : 2,
    // keeping: "냉동상품"

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
                    <Button width="100px" _onClick={()=>{setFold(!fold)}}>접기</Button>
                </Grid>
                {
                    fold && 
                        <Grid display="flex" height="128px"  justify="space-between">
                         
                            <Grid display="flex"width="60px"  >
                            <Image margin="25px 0px"width="60px" height="78px" src={productImg}></Image>
                            </Grid>
                             <Grid width="327px">
                             <Text lineHeight="128px"size="16px"weight="700">{productName}</Text>
                            </Grid>
                            <Grid width="100px">
                            <CountNum num ={purchaseNum} setNum={setPurchaseNum}></CountNum>
                            </Grid>
                            <Grid width="116px" >
                            <Text lineHeight="128px">{totalPrice}</Text>
                            </Grid>
                            <Grid width="30px" >
                            <Button  width="30px">x</Button>
                            </Grid>
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
export default Cart;