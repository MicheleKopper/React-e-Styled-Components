import styled from "styled-components";

interface BannerStyleProps {
  height?: "70vh" | "40vh" | "25vh";
}

export const BannerStyle = styled.section<BannerStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: ${(props) => (props.height ? props.height : "70vh")};
  background-color: #ffdfd6;
`;
