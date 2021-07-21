import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import jwt_decode from "jwt-decode";
import {setCookie} from "../../shared/Cookie";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: [],
  is_login: false,
};

//회원가입
const signupAPI = (userName, password, nickname, phoneNumber, address, confirmPassword) => {
  return function (dispatch, getState, { history }) {
    instance.post('/user/regist',{
      userName: userName,
      password: password,
      nickname: nickname,
      phoneNumber: phoneNumber,
      address: address,
      confirmPassword:confirmPassword},
      {
        headers: {
          "Content-Type": "application/json",
        }
      })

      .then((res)=>{
        window.alert("회원가입에 성공했습니다!")
        history.push('/pages/login');
      })
      .catch((err)=> window.alert(err))
  };
};




//아이디중복확인
const idCheck = (userName)=>{
  return function(dispatch, getState, {history}){
    instance.get("/user/regist/"+userName, {
      userName: userName
    })
    .then((res)=>{
      if(res.data){
        window.alert("중복되는 아이디가 있습니다.");
      }
      else{
        window.alert("사용할 수 있는 아이디입니다.");
      }
    })
    .catch(err=> window.alert(err));
  // 아이디 중복체크를 위한 함수입니다.
  }
}



//로그인
const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    instance.post('/user',
    {
      userName: id,
      password: pw,
    },{
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((result) => {
        const decoded = jwt_decode(result.data);
        localStorage.setItem('userId', decoded.sub);
        setCookie('token', result.data);
        dispatch(setUser({
          userName : decoded.sub
        }))
        history.push('/')
        //성공시 토큰, 유저 정보 저장



          // console.log(result.headers.get("Authorization"))
          // console.log(result.headers.get("userInfo"))
          // let token = result.headers.get("Authorization");
          // let userInfo = result.headers.get("userInfo");
          // userInfo = JSON.parse(userInfo);
          // userInfo.name = decodeURI(atob(userInfo.name));
          // userInfo.address = decodeURI(atob(userInfo.address));
          // localStorage.setItem("token", token);
          // localStorage.setItem("userInfo", JSON.stringify(userInfo));
          // dispatch(
          //   setUser({
          //     uid: userInfo.uid,
          //     name: userInfo.name,
          //     address: userInfo.address.split("+").join(" "),
          //   })
          // );
          // history.push("/");
        
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다.");
        console.log(error);
      });
  };
};

// function logout() {
//   fetch("http://3.35.219.219/api/carts/products", {
//     method: "PUT",
//     headers: {
//       Bearer: localStorage.getItem("Bearer"),
//       // 저희 조 백엔드 분들과 정한 토큰 이름입니다! fetch의 headers에 넣어서 보내기로 해서,
//       // 로그인시 받은 토큰을 서버로 보내 사용자 인증을 합니다!
//       "Content-Type": "application/json",
//       // 저희가 보내는 정보들의 타입은 json타입이라는 함수입니다.
//     },
//     body: localStorage.getItem("cart"),
//     // 로컬 스토리지에 저장되어 있는 cart라는 토큰값을 서버로 보내고, 서버에서는 그 값을 통해
//     // 장바구니 DB의 값을 수정합니다.
//   }).then((res) => console.log(res));
//   localStorage.clear();
//   // 로그아웃 이후 로컬스토리지의 모든 토큰들을 삭제하여, 장바구니 DB와 로컬스토리지의 값이 다르지 않도록 하였습니다.
//   history.replace("/");
// }
const logout = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    dispatch(logOut());
    history.replace("/");
  };
};

const isLogin = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!token || !userInfo) {
      return false;
    }
    dispatch(
      setUser({
        uid: userInfo.uid,
        name: userInfo.name,
        address: userInfo.address,
      })
    );
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  signupAPI,
  loginAPI,
  logout,
  isLogin,
  idCheck
};

export { actionCreators };
