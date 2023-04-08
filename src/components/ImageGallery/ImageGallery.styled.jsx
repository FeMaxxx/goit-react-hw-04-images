import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-bottom: 20px;

  max-width: calc(100vw - 48px);
  list-style: none;
`;
