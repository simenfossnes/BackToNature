import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import isEmpty from 'lodash.isempty';

// components:
import Marker from '../../components/Marker';

// examples:
import GoogleMap from '../../components/GoogleMap';

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.geometry.location.lat,
      place.geometry.location.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

class Chances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data.results }));
  }

  render() {
    const { places } = this.state;
    console.log(this.props);
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
              lat={place.geometry.location.lat}
              lng={place.geometry.location.lng}
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
  center: [60.310720, 24.484246],
  zoom: 12.3,
};

export default Chances;