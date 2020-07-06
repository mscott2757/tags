import styled, { css } from 'styled-components';

export const Button = styled.button`
    appearance: none;
    border-radius: 2px;
    border: 1px solid #ddd;
    padding: 0 16px;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    color: #4c4c4c;

    ${({ disabled }) => disabled && css`
      pointer-events: none;
      opacity: 0.5;
    `};

    &:hover {
      background-color: #eee;
    }

    &:focus {
      outline: none;
    }

`;
