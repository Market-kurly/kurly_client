import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";



const Product = (props)=>{
    const {productId, productName, productImg, description, price} = props;
    
    
 
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

Product.defaultProps = {
    productName :"친환경 양파 1kg",
    productImg : "https://i.pinimg.com/564x/bf/35/66/bf3566cd10c73edcfb61e041dbb434a1.jpg",
    description:"햄버거",
    price:"2000"
}

export default Product;