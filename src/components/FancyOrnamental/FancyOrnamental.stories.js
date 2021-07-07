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
      <FancyOrnamental 
        topOrnament={<Ornament/>} 
        bottomOrnament={<Ornament/>} 
        ornamentHeight={48} 
        gapSize={140} 
        borderSize={1} 
        roundedSize={3}
      >Cras est metus, iaculis a dictum eget, suscipit vitae quam. Mauris sollicitudin lectus nec mollis tristique. Fusce sagittis, nulla et gravida elementum, orci nisl pellentesque lacus, eget tempor nibh erat nec elit. Aenean ante massa, varius vitae ullamcorper vel, iaculis a urna. Vestibulum ultricies semper nisl quis malesuada. Fusce ullamcorper nunc non tempor consectetur. Donec at turpis ac dui interdum maximus in eget dui. Vestibulum viverra velit quis efficitur dictum. Ut molestie nibh vel lectus sollicitudin bibendum. Aenean suscipit eget purus sed fermentum.</FancyOrnamental>
    </div>
  );

}