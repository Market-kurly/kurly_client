import React from "react";
import styled from "styled-components";
const Input = (props) => {

  const { value, onSubmit,border, color,fontsize,bgcolor, border_radius, height, placeholder, _onChange, type, width, margin, padding, _onClick } =
    props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    height: height,
    border: border,
    border_radius: border_radius,
    bgcolor: bgcolor,
    fontsize: fontsize,
    color: color
  };

  return (
    <React.Fragment>
      <ElInput
         value={value}
        {...styles}
        type={type}
        placeholder={placeholder}
        onClick={_onClick}
        onChange={_onChange}
        onKeyPress ={(e)=>{
          if(e.key === "Enter"){
            onSubmit(e);
          }
        }}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
  _onClick: () => {},
  type: "text",
  value: "",
  width: "100%",
  height: false,
  margin: false,
  padding: false,
  border_radius:"3px",
  bgcolor: false,
  fontsize: false,
  color:"#666",
  onSubmit:()=>{}

};

const ElInput = styled.input`
  box-sizing: border-box;
  border: ${(props) => props.border};
  border-radius:${(props) => props.border_radius};
  padding: ${(props) => (props.padding ? `${props.padding};` : "19px 19px;")};
  outline-style:none;
  -webkit-appearance:none;
  width: ${(props) => props.width};
  ${(props) => (props.height ? `height:${props.height};` : "")}
  ${(props) => (props.bgcolor ? `background-color:${props.bgcolor};` : "")}
  ${(props) => (props.fontsize ? `font-size:${props.fontsize};` : "")}
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  &::placeholder {
    color: ${(props) => props.border};;
    font-weight: 500;
  }


`;


export default Input;