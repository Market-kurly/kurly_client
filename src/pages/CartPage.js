import React from "react";
import { Grid, Input, Button, Image ,Text} from "../elements";
import CartList from "../components/CartList";
import Delivery from "../components/Delivery";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";

const CartPage = (props) =>{
    const product_id = props.match.params.id;
    const dispatch = useDispatch();
    const cart = useSelector(state=> state.product.cart_list);
    console.log(cart);

    return(
        <React.Fragment>
            <Grid width="1050px" margin="0 auto"  >
                <Grid textalign="center"height="151px" margin="0 auto">
                   <Text lineHeight="151px"weight="bold"size="28px">장바구니</Text>
                   
                </Grid>
                <Grid display="flex">
                <CartList {...cart} id={product_id}></CartList>
                <Delivery  {...cart}  id={product_id} ></Delivery>
                </Grid>
            
            </Grid>
            <Grid margin="100px 0px" height="100px" bgcolor="black">

            </Grid>
           
        </React.Fragment>
    )
}
export default CartPage;