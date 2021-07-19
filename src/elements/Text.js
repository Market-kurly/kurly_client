import React from "react";
import styled from "styled-components";

const Text= (props) =>{

    const {lineHeight, width,margin, padding, children, size, weight, color, _onClick} = props;

    const styles = {
        size: size,
        weight: weight,
        color: color,
        margin: margin,
        padding: padding,
        width:width,
        lineHeight:lineHeight
      
    }
    return(
        <React.Fragment>
            <P {...styles} onClick={_onClick}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children : null,
    size : "14px",
    weight: false,
    color: "",
    _onClick : ()=>{},
    margin: "0px",
    padding: false,
    width: "",
    lineHeight:false,
   
}

const P = styled.p`
    display: block;
    font-size: ${(props)=> (props.size)};  
    margin: ${(props)=> (props.margin)};  
    ${(props) => (props.width ? `width: ${props.width};` : "")}
    ${(props) => (props.weight ? `font-weight: ${props.weight};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.lineHeight ? `line-height: ${props.lineHeight};` : "")}
  
`;
export default Text;