import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Chances.module.css';
import Marker from '../../components/Marker/Marker';
import Marker2 from '../../components/Marker/Marker_chance';
import GoogleMap from '../../components/GoogleMap';
import { Slider } from 'antd';
import * as places_data from '../../data/places.js';
import * as chances from '../../data/chances.js';
import Legend from '../../images/Legend.jsx';
import { updateDaysAhead } from '../../state/actions/timePeriodActions';
import Loader from '../../components/Loader';

class Chances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places_data.data,
      colors: ["#1c3010", "#34591e", "#4f842d", "#62b239"],
      chance: [],
      keys: []
    }
  }

  componentDidMount() {
    var i = 0;
    while (i < 5) {
      var num = Math.floor((Math.random() * 8) + 1);
      var loc = Math.floor((Math.random() * 2));
      var key = Math.floor((Math.random() * 1000));
      this.state.chance.push([num, loc]);
      this.state.keys.push(key);
      i ++;
    }
    console.log(this.state.chance);
  }



  render() {
    const { places, colors, chance } = this.state;
    const { loading, daysAhead, updateDaysAhead } = this.props; 

    const data = this.props.data ? this.props.data[daysAhead] : null;

    console.log('loading: ', this.props.loading);

    return (
      <div className={styles.wrapper}>
        { loading && <Loader/> }
        <div className={styles.legend} ><Legend width={64}/></div>
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
              color={data != null ? colors[data[place.track_id]] : colors[0]}
            />
          ))}
          {chance.map((ch, i) => (
            <Marker2
            key={this.state.keys[i]}
            lat={chances.chances[ch[0]].locations[ch[1]].lat}
            lng={chances.chances[ch[0]].locations[ch[1]].lng}
            icon={chances.chances[ch[0]].id}
          />
          ))}
        </GoogleMap>
        <div className={styles.sliderWrapper}>
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
  daysAhead: state.timePeriod.daysAhead,
  loading: state.predictions.peopleTraffic.fetching
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateDaysAhead
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Chances);