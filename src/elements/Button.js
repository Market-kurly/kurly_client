import React from "react";
import styled from 'styled-components';

const Button = (props)=>{
    const {fontsize, border, margin, padding,width, height, background_color, font_color, _onClick, border_radius, children} = props;
    
    const styles = {
        width: width,
        height: height,
        background_color: background_color,
        font_color: font_color,
        border_radius: border_radius,
        margin: margin,
        padding: padding,
        border: border,
        fontsize: fontsize
    }
    
    return (
        <React.Fragment>
            <Btn onClick={_onClick}{...styles}>
                {children}
            </Btn>
        </React.Fragment>
    )
}


Button.defaultProps = {
    width:"100%",
    height: "20px",
    background_color: false,
    font_color: false,
    _onClick: ()=>{},
    border_radius:false,
    children: null,
    margin: false,
    padding: false,
    border:false,
    fontsize: false,

}

const Btn = styled.button`
 ${(props) => (props.border ? `border: ${props.border};` : "")}
 ${(props) => (props.fontsize ? `font-size: ${props.fontsize};` : "")}
    outline: 0;
    width: ${(props)=> (props.width)};
    height: ${(props)=> (props.height)};
    ${(props) => (props.background_color ? `background-color: ${props.background_color};` : "")}
    ${(props) => (props.font_color ? `color: ${props.font_color};` : "")}
    ${(props) => (props.border_radius ? `border-radius: ${props.border_radius};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    `;

export default Button;