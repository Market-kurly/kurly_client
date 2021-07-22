import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";

const CartList = (props) =>{
    const cart = props;

    return(
        <React.Fragment>

            <Grid width="742px" height="60px" margin="0 auto">
                <Grid display="flex" padding="20px 0px">
                    <Text>전체 선택(1/1)</Text>
                   
                </Grid>
            <Cart {...cart}></Cart>
          
    
            </Grid>
           
        </React.Fragment>
    )
}
export default CartList;