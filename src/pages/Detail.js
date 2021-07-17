import React from "react";
import {Grid, Image, Text, Button} from "../elements"

const Detail = (props) =>{
    return (
        <React.Fragment>
            <Grid display="flex" width="1050px" padding="20px 0px" bgcolor="red" margin="0 auto">
                <Image width="430px" height="552px" src="https://i.pinimg.com/564x/8e/ed/4a/8eed4a1da55068fa84d3512991f78c69.jpg"></Image>
                <Grid bgcolor="purple" width="620px" float="right">
                    <Grid bgcolor="blue" padding="0px 20px">
                    <Grid>
                        <Text>친환경 실파 200g</Text>
                        <Text>부드러운 식감과 은은한 향이 좋은 실파 (200g/1봉)</Text>
                    </Grid>
                    <Grid>
                        <Text>2690원</Text>
                        <Text>로그인후, 적립혜택이 제공됩니다.</Text>
                    </Grid>
                    <Grid>
                        <Grid display="flex">
                            <Text>판매단위</Text>
                            <Text>1박스</Text>
                        </Grid>
                        <Grid display="flex">
                           <Text>중량/용량</Text>
                           <Text>144g</Text>
                        </Grid>
                        <Grid display="flex"> 
                            <Text>배송구분</Text>
                            <Text>샛별배송.택배배송</Text>
                        </Grid>
                        <Grid display="flex">
                          <Text>포장타입</Text>
                          <Text>상온/종이포장</Text>
                        </Grid>
                        <Grid display="flex">
                            <Text>유통기한</Text>
                            <Text>수령일 포함 최소 125일</Text>
                        </Grid>
                        <Grid display="flex">
                            <Text>구매수량</Text>
                            <Text>숫자올라가는것</Text>
                        </Grid>
                        <Grid >
                            <Text>총상품금액: 16500원</Text>
                            <Text>로그인 후 , 적립혜택 제공</Text>
                        </Grid>
                        <Grid display="flex">
                            <Button>재입고 알림</Button>
                            <Button>장바구니 담기</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                   
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default Detail;