import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = props => (
  <div class="containAll">
    <div class="containLoader">
      <div class="circleGroup circle-1"></div>
      <div class="circleGroup circle-2"></div>
      <div class="circleGroup circle-3"></div>
      <div class="circleGroup circle-4"></div>
      <div class="circleGroup circle-5"></div>
      <div class="circleGroup circle-6"></div>
      <div class="circleGroup circle-7"></div>
      <div class="circleGroup circle-8"></div>
    </div>
  </div>
);

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;
