import React from "react";
import styled from "styled-components";

const Text= (props) =>{

    const {margin, padding, children, size, weight, color, _onClick} = props;

    const styles = {
        size: size,
        weight: weight,
        color: color,
        margin: margin,
        padding: padding,
    }
    return(
        <React.Fragment>
            <P {...styles} onClick={_onClick}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children : null,
    size : false,
    weight: false,
    color: "",
    _onClick : ()=>{},
    margin: false,
    padding: false,
}

const P = styled.p`
    ${(props) => (props.size ? `font-size: ${props.size};` : "")}
    ${(props) => (props.weight ? `font-weight: ${props.weight};` : "")}
    ${(props) => (props.color ? `color: ${props.color};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}

`;
export default Text;