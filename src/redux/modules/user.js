import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
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
        console.log(result);
        //성공시 토큰, 유저 정보 저장
        if (result.status === 200) {
          console.log(result.headers.get("Authorization"))
          console.log(result.headers.get("userInfo"))
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
        } else {
          window.alert("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다.");
        console.log(error);
      });
  };
};

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
