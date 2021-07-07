import React from 'react';
import FancyOrnamental from './FancyOrnamental';
import { ReactComponent as Ornament } from './assets/ornament-1.svg';

export default {
  title: 'FancyOrnamental',
  component: FancyOrnamental,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = () => {
  
  return (
    <div style={{height: '100vh', width: '100%', boxSizing: 'border-box', padding: '100px'}}>
      <FancyOrnamental topOrnament={<Ornament/>} bottomOrnament={<Ornament/>} ornamentHeight={48} gapSize={140}></FancyOrnamental>
    </div>
  );

}