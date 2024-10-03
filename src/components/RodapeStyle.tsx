import styled from "styled-components";

export const RodapeStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  width: 100%;
  height: 25vh;
  padding-left: 100px;
  padding-right: 100px;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
      margin: 5px 0;
    }
  }

  nav {
    display: flex;
    gap: 15px;

    img {
      width: 30px;
      height: auto;
      cursor: pointer;
    }
  }
`;
