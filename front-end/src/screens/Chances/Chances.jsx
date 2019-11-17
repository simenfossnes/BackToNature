import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import Marker from '../../components/Marker';
import GoogleMap from '../../components/GoogleMap';
import { Slider, Typography } from 'antd';
import * as places_data from '../../data/places.js';
import Legend from '../../images/Legend.jsx';
import { updateDaysAhead } from '../../state/actions/timePeriodActions';

const { Text } = Typography;

class Chances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places_data.data,
      colors: ["#1c3010", "#34591e", "#4f842d", "#62b239"]
    }
  }

  render() {
    const { places, colors } = this.state;
    const { daysAhead, updateDaysAhead } = this.props;
    const marks = {
      0: 'Today',
      50: 'Tomorrow',
      100: '19.11.2019',
    };   

    return (
      <div className={styles.wrapper}>
        <div className={styles.legend} ><Legend /></div>
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
              color={this.props.data != null ? colors[this.props.data[place.track_id]] : colors[0]}
            />
          ))}
        </GoogleMap>
        <div className={styles.sliderWrapper}>
          <Text>Predicting {daysAhead} days ahead</Text>
          <Slider onChange={updateDaysAhead} handleStyle={{width: '24px', height: '24px', marginTop: '-12px'}} min={0} max={5} defaultValue={0} step={1} />
        </div>
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

const mapStateToProps = (state) => ({
  data: state.predictions.peopleTraffic.data,
  daysAhead: state.timePeriod.daysAhead
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateDaysAhead
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Chances);