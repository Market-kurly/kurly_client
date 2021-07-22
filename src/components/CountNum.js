import React from "react";
import styled from "styled-components";

const CountNum = (props) =>{
    const num = props.num;
    const setNum = props.setNum;
 
    
    const downNum = ()=>{
        if(num>1){
            setNum(num-1);
        }
       
    }

    const upNum = ()=>{
        setNum(num+1);
    }

    return(
        <React.Fragment>
            <Span>
                <DownBtn 
                onClick={()=>{downNum()}}
                ></DownBtn>
                <Num type="number" readonly="readonly" value={num}></Num>
                <UpBtn
                onClick={()=>{upNum()}}
                ></UpBtn>
            </Span>
        </React.Fragment>
    )
}

const Span = styled.span`
    overflow: hidden;
    float: left;
    width: 88px;
    height: 30px;
    border: 1px solid #dddfe1;
    border-radius: 3px;
`;

const DownBtn = styled.button`
background-image: url(https://res.kurly.com/pc/ico/2010/ico_minus_on.svg);
background: #fff url(https://res.kurly.com/pc/ico/2010/ico_minus.svg) no-repeat 50% 50%;
background-size: 30px 30px;
overflow: hidden;
float: left;
width: 28px;
height: 28px;
border: 0;
font-size: 0;
line-height: 0;
text-indent: -9999px;
`;

const UpBtn = styled.button`
background-image: url(https://res.kurly.com/pc/ico/2010/ico_plus_on.svg);
background: #fff url(https://res.kurly.com/pc/ico/2010/ico_plus.svg) no-repeat 50% 50%;
float: right;
margin-left: -1px;
background-size: 30px 30px;
width: 28px;
height: 28px;
border: 0;
font-size: 0;
line-height: 0;
text-indent: -9999px;
overflow: hidden;
`;

const Num = styled.input`
float: left;
width: 30px;
height: 30px;
margin-right: -1px;
padding: 0 0 4px;
border: 0;
background-color: #fff;
font-size: 14px;
color: #000;
line-height: 18px;
text-align: center;
`;
export default CountNum;