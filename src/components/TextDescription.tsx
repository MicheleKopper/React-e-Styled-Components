import styled from "styled-components";

interface TextDescriptionProps {
  textAlign?: "center" | "left";
  paddingLeft?: "400px" | "0" | "100px";
  paddingRight?: "400px" | "0" | "100px";
  paddingTop?: "30px" | "0";
}

export const TextDescription = styled.p<TextDescriptionProps>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-size: 17px;
  line-height: 1.5;
  color: #000000;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};
`;
