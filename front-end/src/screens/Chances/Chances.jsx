import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import Marker from '../../components/Marker';
import GoogleMap from '../../components/GoogleMap';

class Chances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [{
        id: 0, 
        name: "Point",
        lat: 60.33073081360451,
        lng:24.492838046488888
      },
      {
        id: 1, 
        name: "Point",
        lat: 60.341269,
        lng: 24.497746
      },
      {
        id: 2, 
        name: "Point",
        lat: 60.340301,
        lng: 24.497327
      },
      {
        id: 3, 
        name: "Point",
        lat: 60.339412,
        lng: 24.497680
      },
      {
        id: 4, 
        name: "Point",
        lat: 60.338491,
        lng: 24.498418
      },
      {
        id: 5, 
        name: "Point",
        lat: 60.337713,
        lng: 24.499604
      },
      {
        id: 6, 
        name: "Point",
        lat: 60.336665,
        lng: 24.499893
      },
      {
        id: 7, 
        name: "Point",
        lat: 60.336047,
        lng: 24.498821
      },
      {
        id: 8, 
        name: "Point",
        lat: 60.335138,
        lng: 24.498267
      },
      {
        id: 9, 
        name: "Point",
        lat: 60.334293,
        lng: 24.499026
      },
      {
        id: 10, 
        name: "Point",
        lat: 60.333674,
        lng: 24.497712
      },
      {
        id: 11, 
        name: "Point",
        lat: 60.333117,
        lng: 24.496265
      },
      {
        id: 12, 
        name: "Point",
        lat: 60.332290,
        lng: 24.494818
      },
      {
        id: 13, 
        name: "Point",
        lat: 60.331851,
        lng: 24.493235
      }]
    }
  }

  componentDidMount() {
    fetch('places.json')
      .then(response => response.json())
      .then(data => this.setState({ places: data.results }));
  }

  render() {
    const { places } = this.state;
    console.log(this.props);
    console.log(places);
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
  center: [60.310720, 24.484246],
  zoom: 12.3,
};

export default Chances;