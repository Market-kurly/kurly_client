import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import jwt_decode from "jwt-decode";
import { setCookie } from "../../shared/Cookie";

const SET_USER = "SET_USER";


const setUser = createAction(SET_USER, (user) => ({ user }));


const initialState = {
  user: [],
  is_login: false,
};

//회원가입
const signupAPI = (
  userName,
  password,
  nickname,
  phoneNumber,
  address,
  confirmPassword
) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(
        "/user/regist",
        {
          userName: userName,
          password: password,
          nickname: nickname,
          phoneNumber: phoneNumber,
          address: address,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((res) => {
        window.alert("회원가입에 성공했습니다!");
        history.push("/pages/login");
      })
      .catch((err) => window.alert(err));
  };
};

//아이디중복확인
const idCheck = (userName) => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/user/regist/" + userName, {
        userName: userName,
      })
      .then((res) => {
        if (res.data) {
          window.alert("중복되는 아이디가 있습니다.");
        } else {
          window.alert("사용할 수 있는 아이디입니다.");
        }
      })
      .catch((err) => window.alert(err));
    // 아이디 중복체크를 위한 함수입니다.
  };
};

//로그인
const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(
        "/user",
        {
          userName: id,
          password: pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        const decoded = jwt_decode(result.data.jwtToken);
        const user = result.data.user;
        localStorage.setItem('userId', decoded.sub);
        setCookie('token', result.data.jwtToken);
        dispatch(setUser({
          userName: user.userName,
          address: user.address,
          phoneNumber: user.phoneNumber,
          nickname: user.nickname,
        }))
        history.push('/')
      
        
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다.");
        console.log(error);
      });
  };
};

//로그인 유지 
const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const user = localStorage.getItem("userId") ? true : false;
    if (user) {
      dispatch(
        setUser({
          userName: localStorage.getItem("userId"),
        })
      );
    } else {
      console.log("로그인상태아님");
    }
  };
};


export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  signupAPI,
  loginAPI,
  idCheck,
  loginCheck,
};

export { actionCreators };
