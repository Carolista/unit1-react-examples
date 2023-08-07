import { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-image: linear-gradient(#508015, #335b03);
  color: white;
  height: 60px;
  padding: 0px 20px;
`;

// Example of class-based component (older syntax)
export default class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <h2>Garden Planning Tool</h2>
      </StyledHeader>
    );
  }
}