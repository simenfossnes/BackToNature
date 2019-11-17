import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Birdwatch from '../../images/binoculars.jsx'; 
import Bonfire from '../../images/bonfire.jsx'; 
import Fishing from '../../images/fishes.jsx'; 
import Moon from '../../images/moon.jsx'; 
import Aurora from '../../images/aurora.jsx'; 
import Pinecone from '../../images/pinecone.jsx'; 
import Swim from '../../images/swim.jsx'; 
import Tent from '../../images/tent.jsx'; 

const array = [Aurora, Moon, Fishing, Birdwatch, Tent, Bonfire, Pinecone, Swim];

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

function returnValue(key) {
  if (key ==1) return <Aurora/>
  if (key ==2) return <Moon />
  if (key ==3) return <Fishing />
  if (key ==4) return <Birdwatch />
  if (key ==5) return <Tent />
  if (key ==6) return <Bonfire />
  if (key ==7) return <Pinecone />
  if (key ==8) return <Swim />
}

const Marker2 = props => (
  <Wrapper
    alt={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
  >
    {returnValue(props.icon)}
  </Wrapper>
);

Marker2.defaultProps = {
  onClick: null,
};

Marker2.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string
};

export default Marker2;