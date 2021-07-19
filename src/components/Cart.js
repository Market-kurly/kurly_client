import React from "react";
import { Grid, Input, Button, Image , Text} from "../elements";

const Cart = (props) =>{

    const [fold, setFold] = React.useState(true);

    return(
        <React.Fragment>
            <Grid width="742px" >
                <hr></hr>
                <Grid justify="space-between"display="flex" height="60px">
               
                    <Text size="18px"weight="700">냉동상품</Text>
                    <Button width="100px" _onClick={()=>{setFold(!fold)}}>접기</Button>
                </Grid>
                {
                    fold && 
                        <Grid display="flex" height="128px"  justify="space-between">
                         
                            <Grid display="flex"width="60px"  >
                            <Image margin="25px 0px"width="60px" height="78px" src="https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg"></Image>
                            </Grid>
                             <Grid width="327px">
                             <Text lineHeight="128px"size="16px"weight="700">[유기방아] 냉동 떡국떡</Text>
                            </Grid>
                            <Grid width="100px">
                            <Text lineHeight="128px">숫자올리는거</Text>
                            </Grid>
                            <Grid width="116px" >
                            <Text lineHeight="128px">6450원</Text>
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
export default Cart;