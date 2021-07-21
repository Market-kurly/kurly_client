import React, { useState } from "react";
import { Grid, Text, Image , Input} from "../elements";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { Badge } from '@material-ui/core';

import { useSelector } from "react-redux";
import { getLocal, setLocal, deleteLocal } from "../shared/Cookie";

const Header = (props) => {
  const is_login = useSelector(state =>state.user.is_login);
  const user = useSelector(state=>state.user.user);

  const [search, setSearch] = useState('');
  
  

  // if (is_login) {
  //   // 서버에서 로그인 시 준 Bearer의 유무로 헤더를 분기하여 로그인 했을 때와 하지 않았을 때를 구분지어 보여주는 조건문입니다.
  //   return (
  //     <React.Fragment>
  //       <Grid width="1035px" height="160px" margin="auto">
  //         <Grid is_flex height="33px">
  //           <Grid flex_end padding="0px 0px 0px 8px">
  //             <Grid flex_center bold width="70px" size="12.4px">
  //               <Text hover="pointer" color="#262626" size="12.4px">
  //                 {user.userName} 님
  //               </Text>
  //               <Point></Point>
  //             </Grid>
  //             <Grid flex_center bold width="80px" size="12.4px">
  //               <Text
                 
  //                 hover="pointer"
  //                 color="#262626"
  //                 size="12.4px"
  //               >
  //                 로그아웃
  //               </Text>
  //               <Point></Point>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (
    <React.Fragment>
      <Grid width="1050px" margin="0 auto" height="37px">
        <Grid width="auto" display="flex" float="right" height="37px" margin="13px 0px 0px 0px">
          <Text
            _onClick={() => {
              history.push("/pages/signup");
            }}
            hover="pointer"
            color="#262626"
            bold
            size="12.4px"
            color="#5f0080"
            padding="0px 11px 0px 0px"
          >
           {is_login? `${user.userName}님`: "회원가입"} &nbsp; &nbsp; |
          </Text>
          <Text
            _onClick={() => {
              history.push("/pages/login");
            }}
            hover="pointer"
            color="#262626"
            bold
            size="12.4px"
            padding="0px 11px 0px 0px"
          >
             {is_login? "": `로그인 |`} 
          </Text>
          <Text size="12px" padding="0px 13px 0px 0px">
            고객센터 ▼
          </Text>
        </Grid>
      </Grid>
      <Grid width="1050px" margin="0 auto">
        <Grid>
          <Image
            _onClick={() => {
              history.push("/");
            }}
            margin="0px auto"
            width="105px"
            height="80px"
            src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
          ></Image>
        </Grid>
      </Grid>

      <Grid width="1050px" height="56px" margin="0 auto">
        <Grid float="left" display="flex">
          <Grid width="16px" padding="15px" margin="0px 10px">
            <Image
              width="16px"
              height="14px"
              margin="5px 0px 0px 5px"
              src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png"
            ></Image>
          </Grid>

          <Grid width="168px" margin="20px 0px 0px 0px">
            <Text size="16px" weight="700">
              전체 카테고리
            </Text>
          </Grid>
          <Grid width="124px" margin="20px 0px 0px 0px">
            <Text size="16px" weight="700">
              신상품
            </Text>
          </Grid>
          <Grid width="116px" margin="20px 0px 0px 0px">
            <Text size="16px" weight="700">
              베스트
            </Text>
          </Grid>
          <Grid width="124px" margin="20px 0px 0px 0px">
            <Text size="16px" weight="700">
              알뜰쇼핑
            </Text>
          </Grid>
          <Grid width="116px" margin="20px 0px 0px 0px">
            <Text size="16px" weight="700">
              특가/혜택
            </Text>
          </Grid>
          <Grid width="242px" padding="4px">
            <Input
            value={search}
              height="36px"
              border="none"
              margin="5px 0px 0px 0px"
              border_radius="18px"
              bgcolor="#f7f7f7"
              placeholder="건강기원 새해맞이 보양식 레시피"
              fontsize="12px"
              _onChange={(e)=>{
                setSearch(e.target.value);
            }}
            onSubmit={
              ()=>{    history.push(`/search/${search}`); 
              setSearch("");
            }
            }
            ></Input>
          </Grid>
          <Grid width="36px" padding="9px" margin="0px 10px">
            <Image
              height="36px"
              width="36px"
              src="https://hyunjung.s3.ap-northeast-2.amazonaws.com/pngwing.com.png"
            ></Image>
          </Grid>
          <Grid width="36px" padding="9px">
          <Badge badgeContent={4} color="secondary">
          <Image
              height="36px"
              width="36px"
              src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg"
              _onClick={()=>{history.push('/cart')}}
            ></Image>
          </Badge>
          
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Point = styled.div`
  width: 8px;
  height: 5px;
  margin: 1px 0 0 5px;
  background-image: url("https://res.kurly.com/pc/ico/1908/ico_down_16x10.png");
  background-size: 8px 5px;
  background-position: center;
`;

export default Header;
