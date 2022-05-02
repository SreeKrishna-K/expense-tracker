import React from 'react'
import ChartBar from './ChartBar.js'
import './Chart.css'

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => Number(dataPoint.value));
    const maxValue = Math.max(...dataPointValues);

    function createChartBar(dataPoint) {
        return <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} />
    }

    return (
        <div className="chart">
            {props.dataPoints.map(createChartBar)}        
        </div>
    )
}

export default Chart
