import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {width, src, height, _onClick} = props;

    const styles = {
        src: src,
        width: width,
        height: height,
    }

    return(
        <React.Fragment>
            <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps ={
    src: "",
    width: "100px",
    height: "100px",
    _onClick : ()=>{}
}

const ImageDefault = styled.div`
    width: ${(props)=> (props.width)};
    height: ${(props)=> (props.height)};
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;
export default Image;