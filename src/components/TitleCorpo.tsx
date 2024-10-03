import styled from "styled-components";

interface TitleCorpoProps {
  textAlign?: "center" | "left";
  paddingLeft?: "0" | "100px";
}
export const TitleCorpo = styled.h1<TitleCorpoProps>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
  font-size: 25px;
  color: #000000;
`;
