import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";

const CartList = (props) =>{
    const dispatch = useDispatch();
    // const cart_list = useSelector(state=> state.product.cart_list);
    
    // React.useEffect(()=>{
    //     dispatch(productActions.getCartSV());
    // },[]);
     

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
            {/* {
                cart_list.cart.map((p, idx)=>{
                    return (<Cart key={p.productId} {...p}></Cart>)
                })
                
            } */}
            </Grid>
           
        </React.Fragment>
    )
}
export default CartList;