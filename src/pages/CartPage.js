import React from "react";
import { Grid, Input, Button, Image ,Text} from "../elements";
import CartList from "../components/CartList";
import Delivery from "../components/Delivery";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";

const CartPage = (props) =>{

   
    return(
        <React.Fragment>
            <Grid width="1050px" margin="0 auto"  >
                <Grid textalign="center"height="151px" margin="0 auto">
                   <Text lineHeight="151px"weight="bold"size="28px">장바구니</Text>
                   
                </Grid>
                <Grid display="flex">
                <CartList></CartList>
                <Delivery></Delivery>
                </Grid>
            
            </Grid>
            <Grid margin="100px 0px" height="100px" bgcolor="black">

            </Grid>
           
        </React.Fragment>
    )
}
export default CartPage;