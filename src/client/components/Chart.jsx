import React, { PropTypes } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

const propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  units: PropTypes.string,
};

function average(data) {
  return _.round(_.sum(data) / data.length);
}

function Chart(props) {
  return (
    <div>
      <Sparklines
        svgWidth={180}
        svgHeight={120}
        data={props.data}
      >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

Chart.propTypes = propTypes;

export default Chart;
