import React from "react";
import {Grid, Image, Text, Button} from "../elements"

const Detail = (props) =>{
    return (
        <React.Fragment>
            <Grid display="flex" width="1050px" padding="20px 0px" margin="0 auto">
                <Image width="430px" height="552px" src="https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg"></Image>
                <Grid  width="620px" float="right">
                    <Grid  padding="0px 60px" >
                    <Grid padding="0px 0px 29px">
                        <Text margin="20px 0px 0px 0px"size="24px">친환경 실파 200g</Text>
                        <Text margin="4px 60px 0px 0px" color="#999" padding="4px 60px 0 0">부드러운 식감과 은은한 향이 좋은 실파 (200g/1봉)</Text>
                    </Grid>
                    <Grid>
                        <Text margin="0px" size="28px">2690원</Text>
                        <Text margin="0px"padding="7px 0px "color="#5f0080">로그인후, 적립혜택이 제공됩니다.</Text>
                    </Grid>
                    <Grid>
                        <Grid margin="0px"display="flex"padding="18px 0px 0px 0px" >
                            <Text width="150px"margin="0px" color="#666">판매단위</Text>
                            <Text margin="0px">1박스</Text>
                        </Grid>
                        <Grid margin="0px" display="flex" padding="18px 0px ">
                           <Text width="150px" margin="0px" color="#666">중량/용량</Text>
                           <Text margin="0px">144g</Text>
                        </Grid>
                        <Grid margin="0px" display="flex" padding="18px 0px"> 
                            <Text width="150px" margin="0px" color="#666">배송구분</Text>
                            <Text margin="0px">샛별배송.택배배송</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px ">
                          <Text width="150px" margin="0px"  color="#666">포장타입</Text>
                          <Text margin="0px" >상온/종이포장</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                          <Text width="150px" margin="0px"  color="#666">원산지</Text>
                          <Text margin="0px" >국내산</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                            <Text width="150px" margin="0px" color="#666">유통기한</Text>
                            <Text margin="0px">수령일 포함 최소 125일</Text>
                        </Grid>
                        <Grid display="flex" padding="18px 0px">
                            <Text width="150px"margin="0px"color="#666">구매수량</Text>
                            <Text margin="0px">숫자올라가는것</Text>
                        </Grid>
                        <Grid display="flex" justify="flex-end">
                            <Text lineHeight="60px" margin="0px" size="13px">총상품금액:</Text>
                            <Text margin="0px" size="32px" weight="800">16500원</Text>
                          
                        </Grid>
                        <Grid display="flex">
                            <Button 
                            
                            fontsize="16px"
                            font_color="#d5d5d5"
                            margin="0px 12px 0px 0px"
                            width="138px" height="56px"
                            border_radius="3px" background_color="#fff" border="1px solid #d5d5d5"
                            >재입고 알림</Button>
                            <Button
                              fontsize="16px"
                              font_color="white"
                             height="56px"
                             background_color="#5f0080"
                             border_radius="3px" 
                             border="0px"
                             >장바구니 담기</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                   
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default Detail;