import Button from "react-bootstrap/Button";
import styled, { css } from "styled-components";

const shared = css`
  &:hover {
    box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.4);
    background: #f99fa4;
    border: 1px solid #f99fa4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 20px 0 rgba(33, 33, 33, 0.4);
    background: #f99fa4;
    border: transparent;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #f7797d;
  color: white;
  border: 1px solid #f7797d;
  ${shared};
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #f7797d;
  color: #f7797d;
  ${shared};
`;
