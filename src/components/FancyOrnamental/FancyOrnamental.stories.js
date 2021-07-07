import React from 'react';
import FancyOrnamental from './FancyOrnamental';

export default {
  title: 'FancyOrnamental',
  component: FancyOrnamental,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = () => {
  
  return (
    <div style={{height: '100vh', width: '100%', boxSizing: 'border-box', padding: '20px'}}>
      <FancyOrnamental></FancyOrnamental>
    </div>
  );

}