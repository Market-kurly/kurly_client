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
      alert("아이디 혹은 비밀번호를 입력해주세요!");
      return false;
    }

    dispatch(userActions.loginAPI(id, pw));
  };

  return (
    <React.Fragment>
      <LoginBox>
        <Log>로그인</Log>
        <ElInput
          placeholder="아이디를 입력해주세요"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <ElInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          margin="10px 0px"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <Grid flex width="300px" margin="-10px 0px 0px 0px">
          <Grid>
            <FindIdPw>
              <p>아이디 찾기</p>
              <p>|</p>
              <p>비밀번호 찾기</p>
            </FindIdPw>
          </Grid>
        </Grid>
        <LoginButton
          onClick={()=>{
            login(id,pw)}}
        >
          로그인
        </LoginButton>
        <SignupButton
          onClick={() => {
            history.push("/pages/signup");
          }}
        >
          회원가입
        </SignupButton>
      </LoginBox>
    </React.Fragment>
  );
};

const ElInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  text-indent: 10px;
  margin: 10px 0px 0px 0px;
`;
const Log = styled.h3`
  font-size: 30px;
  text-align: center;
`;

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
  gap: 10px;
  float: right;

  & li:nth-child(1)::after {
    content: "|";
    font-size: 6px;
    font-weight: 600;
    margin-left: 5px;
    position: relative;
    top: -2px;
  }
`;

const LoginButton = styled.button`
  width: 340px;
  height: 50px;
  font-size: 16px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  color: #ffffff;
  font-weight: 100;
  border-radius: 3px;
  & a:hover {
    cursor: pointer;
  }
`;

const SignupButton = styled.button`
  width: 340px;
  margin-top: 10px;
  height: 50px;
  font-size: 16px;
  border: 1px solid #5f0081;
  background-color: white;
  color: black;
  font-weight: 100;
  border-radius: 3px;
  & a:hover {
    cursor: pointer;
  }
`;

export default Login;
