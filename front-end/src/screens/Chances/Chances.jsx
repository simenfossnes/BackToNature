import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import Marker from '../../components/Marker';
import GoogleMap from '../../components/GoogleMap';
import { Slider } from 'antd';

import * as places_data from '../../data/places.js';
import legend from '../../images/legend-07.png';

class Chances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places_data.data,
      colors: ["#1c3010", "#34591e", "#4f842d", "#62b239"]
    }
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data.results }));
  }

  render() {
    const { places, colors } = this.state;
    const density = [colors[0], colors[1], colors[2], colors[3], colors[0]];
    const marks = {
      0: 'Today',
      50: 'Tomorrow',
      100: '19.11.2019',
    };    
    return (
      <div className={styles.wrapper}>
        <div style={{width: "85%", paddingLeft: "9%"}}>
          <Slider marks={marks} included={false} defaultValue={0} step={50} tipFormatter={null} />
        </div>
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyDW3sblDQVKWqO9j1gRR7yPEztqOt355W4'
          }}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          {places.map(place => (
            <Marker
              key={place.id}
              text={place.name}
              lat={place.lat}
              lng={place.lng}
              color={density[place.track_id]}
            />
          ))}
        </GoogleMap>
        <div className={styles.legenda} ><img style={{width: "90px"}} src={legend}/></div>
      </div>
    );
  }
}

Chances.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
};

Chances.defaultProps = {
  center: [60.309555, 24.522341],
  zoom: 13,
};

export default Chances;