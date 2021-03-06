import styled from 'styled-components';

export const Container = styled.div`
  left: 50%;
  transform: translateX(50%);
  margin-top: 40px;
  height: 90vh;
  background-color: rgb(244, 149, 24);
  border-radius: 4px;
  padding: 10px;
  width: 50%;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #444;

    &:hover {
      color: #fff;
    }
  }
`;

export const ListItem = styled.li`
  & + li {
    margin-top: 5px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
