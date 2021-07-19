import React from "react";
import { Grid, Text, Image , Input} from "../elements";
import { history } from "../redux/configureStore";


const Header = (props) =>{
    return(
        <React.Fragment>
            <Grid width="1050px" margin="0 auto" height="37px" >
              <Grid width="auto" display="flex" float="right" height="37px" padding="20px 0px">
                  <Text size="12px" color="#5f0080" padding="0px 11px 0px 0px">회원가입</Text>
                  <Text size="12px" padding="0px 16px 0px 15px">로그인</Text>
                  <Text size="12px" padding="0px 13px 0px 0px">고객센터</Text>
              </Grid>
            </Grid>
            <Grid width="1050px" margin="0 auto"  >
                <Grid >
                    <Image _onClick={()=>{
                        history.push('/');
                    }}margin="0 auto" width="103px" height="79px" src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"></Image>
                </Grid>
            </Grid>

            <Grid  width="1050px" height="56px" margin="0 auto" > 
                <Grid float="left" display="flex">
                    <Grid width="16px" padding="15px" margin="0px 10px">
                        <Image width="16px" height="14px" margin="5px 14px 0px 0px"src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"></Image>
                    </Grid>
                  
                    <Grid width="168px"  padding="16px 0px">
                        <Text size="16px" weight="700">전체 카테고리</Text>
                    </Grid>
                    <Grid width="124px" padding="16px 0px">
                        <Text size="16px" weight="700">신상품</Text>
                    </Grid>
                    <Grid width="116px" padding="16px 0px">
                        <Text size="16px" weight="700">베스트</Text>
                    </Grid>
                    <Grid width="124px" padding="16px 0px">
                     <Text size="16px" weight="700">알뜰쇼핑</Text>
                    </Grid>
                    <Grid width="116px" padding="16px 0px">
                      <Text size="16px" weight="700">특가/혜택</Text>
                    </Grid>
                    <Grid width="242px" padding="7px 4px">
                        <Input height="36px" border="1px solid #f7f7f6"
                        border_radius="18px" bgcolor="#f7f7f7"placeholder="건강기원 새해맞이 보양식 레시피"
                        fontsize="12px"
                        ></Input>
                    </Grid>
                    <Grid width="36px" padding="9px" margin="0px 10px">
                        <Image height="36px" width="36px"src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg"></Image>
                    </Grid>
                    <Grid width="36px" padding="9px">
                        <Image _onClick={()=>{
                            history.push('/cart');
                        }} height="36px" width="36px"src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg"></Image>
                    </Grid>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Header;