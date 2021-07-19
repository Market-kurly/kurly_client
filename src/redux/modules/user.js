import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const signupAPI = (id, pw, userName, email, address) => {
  return function (dispatch, getState, { history }) {
    const API = "http://3.35.219.219/api//signup";
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userId: id,
        password: pw,
        email: email,
        address: address,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        //중복체크 후 다시 중복 아이디, 이메일로 바꿨을 경우
        //대비 서버에서 한번 더 체크.
        let dupMsg = result.message;
        if (dupMsg === "emailfalse") {
          window.alert("이메일 중복확인을 해주세요.");
        } else if (dupMsg === "usernamefalse") {
          window.alert("아이디 중복확인을 해주세요.");
        } else {
          window.alert("회원가입이 되었습니다!");
          history.push("/login");
        }
      });
  };
};

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    const API = "http://dmsql5303.shop/api/v1/login";
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        password: pw,
      }),
    })
      .then((result) => {
        console.log(result);
        //성공시 토큰, 유저 정보 저장
        if (result.status === 200) {
          let token = result.headers.get("Authorization");
          let userInfo = result.headers.get("userInfo");
          userInfo = JSON.parse(userInfo);
          userInfo.name = decodeURI(atob(userInfo.name));
          userInfo.address = decodeURI(atob(userInfo.address));
          localStorage.setItem("token", token);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          dispatch(
            setUser({
              uid: userInfo.uid,
              name: userInfo.name,
              address: userInfo.address.split("+").join(" "),
            })
          );
          history.push("/");
        } else {
          window.alert("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
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
};

export { actionCreators };
