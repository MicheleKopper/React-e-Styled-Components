import styled from "styled-components";

interface SectionCardProps {
  reverse?: boolean;
}

export const SectionCard = styled.div<SectionCardProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
