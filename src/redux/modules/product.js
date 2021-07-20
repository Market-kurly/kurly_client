import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

// actions
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";


//actioncreators
const getProducts = createAction(GET_PRODUCTS, (product_list) => ({product_list}));
const getOneProduct = createAction(GET_ONE_PRODUCT, (product)=>({product}));
const getCart = createAction(GET_CART, (cart_list)=>({cart_list}));
const addCart = createAction(ADD_CART, (product)=>({product}));
const deleteCart = createAction(DELETE_CART, (productId) =>({productId}));

// initial
const initialState = {
    product_list : [],
    product : [],
    cart_list : []
}


//middle
//메인페이지에서 상품 리스트 불러오기
const getProductSV = ()=>{
   return function(dispatch) {
       instance.get('/main')
       .then(res=>{
           console.log(res.data);
           dispatch(getProducts(res.data));
       })
       .catch(err=> console.log(err));
   }
}
//상세페이지에서 하나만 가져오기
const getOneProductSV = (id) =>{
    return function(dispatch, getState, {history}){
        instance.get('/market/products/'+id)
        .then(res=> {
            dispatch(getOneProduct(res.data));
        })
    }
}

//카드에 담긴 아이템 불러오기
const getCartSV = ()=>{
    return function(dispatch) {
        instance.get('/mypage')
        .then(res=>{
            dispatch(getCart(res.data));
        })
        .catch(err=> console.log(err));
    }
}

//카트에 아이템 추가하기
const addCartSV = (product) =>{
    return function(dispatch, getState, {history}){
        instance.post('/mypage',{
            productId : product.productId,
            purchase : product.purchase
        })
        .then((res) =>{
            dispatch(addCart({...product, 
                productImg : res.data.productId, 
                productName : res.data.productName, 
                price : res.data.price}))
        })
        .catch(err=> console.log("장바구니 추가 실패", err));
    }
}


//카트에서 물품 하나 삭제하기
const deleteCartSV = (productId) =>{
    return function(dispatch, getState, {history}){
        instance.delete('/mypage',{
            data:{
                productId
            }
        })
        .then((res)=>{
            window.alert("장바구니에서 하나 삭제");
            dispatch(deleteCart(productId));
        })
        .catch((err)=>{
            window.alert("장바구니 하나 삭제 실패");
            console.log(err);
        })
    }
}

export default handleActions (
    {
        [GET_PRODUCTS]: (state, action) =>
        produce(state, (draft)=>{
            draft.product_list = action.payload.product_list;
        }),
        [GET_ONE_PRODUCT]: (state, action) =>
        produce(state, (draft)=>{
            draft.product = action.payload.product;
        }),
        [GET_CART] : (state, action) =>
        produce(state, (draft)=>{
            draft.cart_list = action.payload.cart_list;
        }),
        [ADD_CART] : (state, action) =>
        produce(state, (draft)=>{
            draft.cart_list.cart.unshift(action.payload.product);
        }),
        [DELETE_CART] : (state, action) =>
        produce(state, (draft)=>{
            const index = draft.cart_list.cart.findIndex((p)=> p.productId === action.payload.productId);
            if(index > -1){
                draft.cart_list.cart.splice(index,1);
            }
        })

    },
    initialState
);

const actionCreators = {
  
    getProductSV,
    getOneProductSV,
    getCartSV,
    addCartSV,
    deleteCartSV
}

export { actionCreators};
