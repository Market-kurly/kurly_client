import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import instance from "../../shared/config";

const GET_PRODUCTS = "GET_PRODUCTS";

const getProducts = createAction(GET_PRODUCTS, (products) => ({
  products,
}));

const serverIP = "http://3.35.219.219";
const initialState = {
  product_list: [
    {
        productId:"1",
        productImg:"imgUrl",
        productName:"상품 이름",
        price:"22000",
        description:"(소)설명"
        },
  ],
};

const getProductsDB = () => {
  return function (dispatch, getState, { history }) {
    instance.get("/").then((result) => {
      dispatch(getProducts(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_PRODUCTS]: (state, action) => {
      return produce(state, (draft) => {
        draft.product_list = action.payload.products;
      });
    },
  },
  initialState
);

const actionCreators = {
  getProducts,
  getProductsDB,
};

export { actionCreators };