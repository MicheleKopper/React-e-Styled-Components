import styled from "styled-components";

interface ContainerProps {
  flexDirection?: "row" | "column";
  backgroundColor?: "#f9f9f9" | "#ffffff";
  paddingLeft?: "90px" | "0";
  paddingRight?: "90px" | "0";
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};

  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};

  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
`;
