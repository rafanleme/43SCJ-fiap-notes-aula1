import styled, { keyframes } from "styled-components";

// !!! implementar animação

export const Container = styled.article`
  width: 200px;
  height: 200px;
  padding: 10px;
  position: relative;

  color: var(--white);
  background-color: var(--primary);
  box-shadow: 2px 2px 10px #00000099;

  p:first-child {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover  {
    color: #333;
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
  }
`;
