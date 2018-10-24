import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import _ from 'lodash';

const average = (data) => {
  return _.round(_.sum(data) / data.length);
}

const Chart = ({data, color, units}) => {
  return (
    <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div className="mx-auto">{average(data)} {units}</div>
    </div>
  )
}

export default Chart;
