import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import Cart from "../components/Cart";

const CartList = (props) =>{
    return(
        <React.Fragment>

            <Grid width="742px" height="60px" margin="0 auto">
                <Grid display="flex" padding="20px 0px">
                    <Text>전체 선택(2/2)</Text>
                    <Text>선택 삭제</Text>
                </Grid>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            </Grid>
           
        </React.Fragment>
    )
}
export default CartList;