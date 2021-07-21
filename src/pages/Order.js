import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Image } from "../elements";
import OrderProduct from "../components/OrderProduct";
import { history } from "../redux/configureStore";

const Order = (props) => {
  const [isFold, setIsfold] = useState(false);

  return (
    <React.Fragment>
      <Grid
        padding="55px 0 46px"
        textalign="center"
        width="1050px"
        margin="0 auto"
      >
        <Text weight="800" size="1.5em">
          주문서
        </Text>
      </Grid>

      <Grid
        width="1050px"
        margin="0 auto"
        display="felx"
        justify="space-between"
      >
        <Text size="20px" padding="14px 0 16px">
          주문 상품
        </Text>
        <BtnFold
          isFold={isFold}
          onClick={() => {
            setIsfold(!isFold);
          }}
        ></BtnFold>
      </Grid>

      {isFold ? (
        <Ul>
          <OrderProduct></OrderProduct>
          <OrderProduct></OrderProduct>
        </Ul>
      ) : (
        <OrderInfo> 친환경 햇 양파 1kg외 5개의 상품을 주문합니다.</OrderInfo>
      )}

      <Grid
        width="1050px"
        padding="74px 0px 0px 0px"
        margin="0 auto"
        justify="space-between"
      >
        <Text size="20px" padding="14px 0 16px">
          주문자 정보
        </Text>
        <Table>
          <Tr>
            <Th>보내는분</Th>
            <Td>이현주</Td>
          </Tr>
          <Tr>
            <Th>휴대폰</Th>
            <Td>01012345678</Td>
          </Tr>
          <Tr>
            <Th>이메일</Th>
            <Td>aaa@naver.com</Td>
          </Tr>
        </Table>
      </Grid>

      <Grid
        width="1050px"
        padding="74px 0px"
        margin="0 auto"
        justify="space-between"
      >
        <Text size="20px" padding="14px 0 16px">
          배송정보
        </Text>
        <Table>
          <Tr>
            <Th>배송지</Th>
            <Td>부산 어쩌구로 어쩌구길 21</Td>
          </Tr>
          <Tr>
            <Th>상세정보</Th>
            <Td>이현주, 01012345678</Td>
          </Tr>
        </Table>
      </Grid>

      <Grid width="1050px" margin="0 auto" justify="space-between">
        <Text size="20px" padding="14px 0 16px">
          쿠폰/적립금
        </Text>
        <Table>
          <Tr>
            <Th>쿠폰 적용</Th>
            <Td> 쿠폰사용문의</Td>
          </Tr>
          <Tr>
            <Th>적립금 적용</Th>
            <Td>사용 가능한 적립금이 없습니다.</Td>
          </Tr>
        </Table>
      </Grid>

      <Grid
        width="1050px"
        padding="74px 0px"
        margin="0 auto"
        justify="space-between"
      >
        <Text size="20px" padding="14px 0 16px">
          결제수단
        </Text>
        <Table>
          <Tr>
            <Th>카카오페이 결제</Th>
            <Td>
              <input type="radio" />
              <Image
                margin="0px 4px"
                height="22px"
                width="53px"
                src="https://res.kurly.com/pc/service/order/2105/logo_kakaopay.png"
              ></Image>
            </Td>
          </Tr>

          <Tr>
            <Th>토스 결제</Th>
            <Td>
              <input type="radio" />
              <Image
                margin="0px 4px"
                height="22px"
                width="62px"
                src="https://res.kurly.com/pc/service/order/2106/ico_toss.png"
              ></Image>
            </Td>
          </Tr>

          <Tr2>
            <Th>Github 주소</Th>
            <Td>
              <Image
                margin="0px 4px"
                height="22px"
                width="22px"
                src="https://hyunjung.s3.ap-northeast-2.amazonaws.com/pngegg+(1).png"
              ></Image>
              <A href="https://github.com/yanghyunjung">
                프론트엔드 - 양현정 Github
              </A>
            </Td>
            <Td>
              <Image
                margin="0px 4px"
                height="22px"
                width="22px"
                src="https://hyunjung.s3.ap-northeast-2.amazonaws.com/pngegg+(1).png"
              ></Image>
              <A href="https://github.com/leehyeonj">
                프론트엔드 - 이현주 Github
              </A>
            </Td>
            <Td>
              <Image
                margin="0px 4px"
                height="22px"
                width="22px"
                src="https://hyunjung.s3.ap-northeast-2.amazonaws.com/pngegg+(1).png"
              ></Image>
              <A href="https://github.com/fitChan">백엔드 - 성찬우 Github</A>
            </Td>
            <Td>
              <Image
                margin="0px 4px"
                height="22px"
                width="22px"
                src="https://hyunjung.s3.ap-northeast-2.amazonaws.com/pngegg+(1).png"
              ></Image>
              <A href="https://github.com/taehyun9244">백엔드 - 남태현 Github</A>
            </Td>
          </Tr2>
        </Table>
      </Grid>

      <Grid
        padding="0px 0px 70px 0px"
        width="1050px"
        margin="0 auto"
        textalign="center"
      >
        <Button
          background_color="#5f0080"
          font_color="white"
          border="none"
          border_radius="3px"
          fontsize="16px"
          width="240px"
          height="56px"
          _onClick={() => {
            window.location.href = 'https://github.com/Market-kurly';
            // history.push("/");
          }}
        >
          결제하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const OrderInfo = styled.div`
  margin: 0 auto;
  width: 1050px;
  height: 80px;
  padding-top: 29px;
  border-bottom: 1px solid #f4f4f4;
  font-weight: 700;
  font-size: 16px;
  color: #333;
  line-height: 24px;
  letter-spacing: -0.35px;
  text-align: center;
  border-top: 1px solid #333;
`;
const BtnFold = styled.button`
  display: block;
  overflow: hidden;
  float: right;
  width: 30px;
  height: 30px;
  border: 0;
  background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_dropup.svg);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: 50% 50%;
  font-size: 0;
  text-indent: -9999px;
  ${(props) => (props.isFold ? "" : `  transform: rotate(180deg);`)}
`;

const Table = styled.table`
  border-top: 1px solid #333;
  width: 1050px;
  padding-top: 19px;
  border-bottom: 1px solid #f4f4f4;
`;

const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const Tr2 = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  height: 150px;
`;

const Th = styled.th`
  width: 190px;
  padding: 8px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #333;
  line-height: 24px;
  letter-spacing: -0.32px;
  vertical-align: top;
  text-align: left;
`;

const Td = styled.td`
  position: relative;
  padding: 8px 0;
  font-size: 14px;
  color: #333;
  line-height: 24px;
  vertical-align: top;
  display: flex;
`;

const Ul = styled.ul`
  display: block;
  list-style-type: none;
  width: 1050px;
  margin: 0 auto;
  padding-top: 10px;
  border-top: 1px solid #333;
  text-align: center;
`;

const A = styled.a`
  text-decoration-line: none;
  font-size: 1.3em;
  font-weight: bold;
  color: #061161;
`;

export default Order;
