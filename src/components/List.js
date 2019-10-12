import styled from 'styled-components';

const List = styled.ul`
  padding-top: 1em;
  font-weight: normal;
  font-size: 1rem;
  width: 100%;
  li {
    display: flex;
    width: 100%;
    height: 3em;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${props => props.theme.text};
  }
`;

export default List;
