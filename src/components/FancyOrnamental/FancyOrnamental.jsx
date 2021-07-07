import React from 'react';
import styled from 'styled-components';

const FancyOrnamental = (props) => {
  const { children } = props;

  const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;

    &:before,
    &:after {
      content: '';
      width: 50%;
      height: 100%;
      top: 0;
      border-style: solid;
      border-color: #000;
    }

    &:before {
      border-width: 1px 0 1px 1px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:after {
      border-width: 1px 1px 1px 0px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  `

  

  return (
    <Container>
    </Container>
  )
}

export default FancyOrnamental;