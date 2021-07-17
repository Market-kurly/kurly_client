import React from "react";
import styled from "styled-components";
import { Input, Text, Grid, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const dispatch = useDispatch();

  const login = (id, pw) => {
    if (id === "" || pw === "") {
      alert("아이디 혹은 비밀번호 오류입니다.");
      return false;
    }

    dispatch(userActions.loginAPI(id, pw));
  };

  return (
    <React.Fragment>
      <LoginBox>
        <Text size="20px" bold margin="0px 0px 30px 0px">
          로그인
        </Text>
        <Input
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          margin="10px 0px"
          _onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <Grid flex width="340px" margin="-15px 0px 0px 0px">
          <Text size="13px">보안접속</Text>
          <Grid>
            <FindIdPw>
              <li>아이디찾기</li>
              <li>비밀번호 찾기</li>
            </FindIdPw>
          </Grid>
        </Grid>
        <Button
          margin="17px 0px 0px 0px"
          _onClick={() => {
            login(id, pw);
          }}
        >
          로그인
        </Button>
        <Button
          margin="10px"
          bg="#ffffff"
          color="#5f0080"
          _onClick={() => {
            history.push("/signup");
          }}
        >
          회원가입
        </Button>
      </LoginBox>
    </React.Fragment>
  );
};

const LoginBox = styled.div`
  width: 340px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 90px 0px 120px 0px;
`;

const FindIdPw = styled.ul`
  font-size: 13px;
  display: flex;
  gap: 5px;

  & li:nth-child(1)::after {
    content: "|";
    font-size: 6px;
    font-weight: 600;
    margin-left: 5px;
    position: relative;
    top: -2px;
  }
`;

export default Login;
