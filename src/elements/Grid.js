import React from "react";
import styled  from "styled-components";


const Grid = (props) =>{
    const{position, float, width, height, padding, margin, border, display, bgcolor, children, alignitem, 
    justify, textalign, _onClick} = props;

    const styles ={
        width: width,
        height: height,
        padding:padding,
        margin: margin,
        border: border,
        display: display,
        bgcolor: bgcolor,
        alignitem: alignitem,
        justify: justify,
        textalign: textalign,
        float:float,
        position: position

    }
    return(
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    width: "100%",
    height: "",
    padding: false,
    margin: false,
    border: false,
    display: "block",
    bgcolor: false,
    children: null,
    alignitem :false,
    justify: false,
    textalign : false,
    _onClick: () => {},
    float : false,
    position: false,
   
}

const GridBox = styled.div`
    width: ${(props)=>props.width};
    ${(props) => (props.height? `height: ${props.height};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.display ? `display: ${props.display};` : "")}
    ${(props) => (props.bgcolor ? `background: ${props.bgcolor};` : "")}
    ${(props) => (props.alignitem ? `align-items: ${props.alignitem};` : "")}
    ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
    ${(props) => (props.textalign ? `text-align: ${props.textalign};` : "")}
    ${(props) => (props.float ? `float: ${props.float};` : "")}
    ${(props) => (props.position ? `position: ${props.position};` : "")}
    box-sizing: border-box;
    font-family: noto sans;
`;
export default Grid;