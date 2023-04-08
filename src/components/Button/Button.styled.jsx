import styled from "@emotion/styled";

export const Btn = styled.button`
  display: block;
  margin: 20px auto;

  width: 180px;
  height: 40px;

  background-color: #3f51b5;
  color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
