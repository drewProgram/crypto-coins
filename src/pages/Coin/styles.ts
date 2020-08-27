import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    background: none;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: 10px;
    transition: 0.4s;

    &:hover {
      transform: translateX(-10%);
      border-color: #fff;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
    margin-top:2px;
  }
`;


export const Container = styled.div`
  left: 50%;
  transform: translateX(50%);
  margin-top: 40px;
  height: 90vh;
  background-color: rgb(244, 149, 24);
  border-radius: 4px;
  padding: 10px;
  width: 50%;
`;

export const InfoList = styled.ul`
  list-style: none;

  li {
    margin-top: 5px;
  }
`;

