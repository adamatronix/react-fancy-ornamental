import React from 'react';
import styled from 'styled-components';

const FancyOrnamental = (props) => {
  const { children, topOrnament, bottomOrnament, ornamentHeight, gapSize, borderSize, roundedSize, autoHeight } = props;

  const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: ${props => props.autoHeight ? 'auto' : '100%' };

    &:before,
    &:after {
      position: absolute;
      content: '';
      width: ${props => `calc(50% - ${props.gapSize/2}px)` || '50%'};
      height: 100%;
      top: 0;
      border-style: solid;
      border-color: #000;
    }

    &:before {
      border-width: ${props => `${props.borderSize}px 0 ${props.borderSize}px ${props.borderSize}px` || '1px 0 1px 1px'} ;
      border-top-left-radius: ${props => props.roundedSize ? `${props.roundedSize}px` : '3px'};
      border-bottom-left-radius: ${props => props.roundedSize ? `${props.roundedSize}px` : '3px'};
    }

    &:after {
      right: 0;
      border-width: ${props => `${props.borderSize}px ${props.borderSize}px ${props.borderSize}px 0` || '1px 1px 1px 0'};
      border-top-right-radius: ${props => props.roundedSize ? `${props.roundedSize}px` : '3px'};
      border-bottom-right-radius: ${props => props.roundedSize ? `${props.roundedSize}px` : '3px'};
    }
  `

  const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  `

  const OrnamentContainer = styled.div`
    position: absolute;
    height: ${props => props.height + 'px' || '50px'};
    width: 100%;
    display: flex;
    justify-content: center;

    svg {
      height: 100%;
    }
  `

  const OrnamentTopContainer = styled(OrnamentContainer)`
    top: ${props => props.height ? ((props.height / 2) * -1) + 'px' : '-25px'};
  `

  const OrnamentBottomContainer = styled(OrnamentContainer)`
    bottom: ${props => props.height ? ((props.height / 2) * -1) + 'px' : '-25px'};
  `

  

  return (
    <Container gapSize={gapSize || null} borderSize={borderSize || null} roundedSize={roundedSize || null} autoHeight={autoHeight}>
      { topOrnament ? <OrnamentTopContainer height={ornamentHeight || null}>
        { topOrnament || null }
      </OrnamentTopContainer> : null }
      <InnerContainer>
        { children }
      </InnerContainer>
      { bottomOrnament ? <OrnamentBottomContainer height={ornamentHeight || null}>
        { bottomOrnament || null }
      </OrnamentBottomContainer> : null }
    </Container>
  )
}

export default FancyOrnamental;