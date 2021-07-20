import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";



const Product = (props)=>{
    const {productId, productName, productImg, description, price} = props;
    
    console.log(productId, productName, productImg, description, price);
    return(
        <React.Fragment>
            <Grid 
            _onClick={()=>{
                history.push(`/detail/${productId}`);
            }}
            margin="10px" height="506px">
                <Image width="249px" height="320px" src={productImg}></Image>
                <Text margin="12px 0px 0px 0px"size="16px">{productName}</Text>
                <Text padding="9px 0px 0px 0px" size="16px" weight="800">{price}원</Text>
            </Grid>

        </React.Fragment>
    )
}

export default Product;