import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import Marker from '../../components/Marker';
import GoogleMap from '../../components/GoogleMap';

import * as places_data from '../../data/places.js';

class Chances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: places_data.data
    }
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data.results }));
  }

  render() {
    const { places } = this.state;
    return (
      <div className={styles.wrapper}>
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
            />
          ))}
        </GoogleMap>
      </div>
    );
  }
}

Chances.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
};

Chances.defaultProps = {
  center: [60.335448, 24.497748],
  zoom: 14.5,
};

export default Chances;