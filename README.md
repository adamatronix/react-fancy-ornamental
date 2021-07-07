# react-fancy-ornamental

Add some fanciness to your site by adding a decorative container to your layout.

## Install

```console
$ npm install @adamatronix/react-fancy-ornamental --save
```

## Example Usage

### Basic

Implementation using one hundred percent of the height.

```jsx
import React from 'react'
import { FancyOrnamental } from '@adamatronix/react-fancy-ornamental'
import { ReactComponent as Ornament } from './assets/ornament-1.svg';


const Example = () => {
  return <div style={{height: '100vh', width: '100%', boxSizing: 'border-box', padding: '100px'}}>
      <FancyOrnamental 
        topOrnament={<Ornament/>} 
        bottomOrnament={<Ornament/>} 
        ornamentHeight={48} 
      ></FancyOrnamental>
    </div>
}
```

### With autoHeight

Allow the container to take the height of the content.

```jsx
import React from 'react'
import { FancyOrnamental } from '@adamatronix/react-fancy-ornamental'
import { ReactComponent as Ornament } from './assets/ornament-1.svg';


const Example = () => {
  return 
      <FancyOrnamental 
        topOrnament={<Ornament/>} 
        bottomOrnament={<Ornament/>} 
        ornamentHeight={48} 
        autoHeight
      >Cras est metus, iaculis a dictum eget, suscipit vitae quam. Mauris sollicitudin lectus nec mollis tristique. Fusce sagittis, nulla et gravida elementum, orci nisl pellentesque lacus, eget tempor nibh erat nec elit. Aenean ante massa, varius vitae ullamcorper vel, iaculis a urna. Vestibulum ultricies semper nisl quis malesuada. Fusce ullamcorper nunc non tempor consectetur. Donec at turpis ac dui interdum maximus in eget dui. Vestibulum viverra velit quis efficitur dictum. Ut molestie nibh vel lectus sollicitudin bibendum. Aenean suscipit eget purus sed fermentum.</FancyOrnamental>
}
```

## Props

### topOrnament

Type: Node Default: undefined

The asset which will appear at the top of the container.

**NOTICE**
Only one child is allowed to be passed.

### bottomOrnament

Type: Node Default: undefined

The asset which will appear at the bottom of the container.

**NOTICE**
Only one child is allowed to be passed.

### ornamentHeight

Type: Number Default: undefined

Pass the height of the ornaments

### gapSize

Type: Number Default: undefined

Pass size of the gap which will appear inbetween the border where the ornament lies.

### borderSize

Type: Number Default: undefined

Pass size of the border.

### roundedSize

Type: Number Default: undefined

Pass radius size of the border.

### autoHeight

Type: Boolean Default: undefined

When set, it allows the container to take the children content height. Otherwise it will be one hundred percent of its parent.