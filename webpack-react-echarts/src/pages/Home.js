import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'


class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	componentDidMount() {
		this.drawChart()
	}
	
	
	drawChart () {
		let myChart = echarts.init(this.chart)
		let option = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: 'line',
				smooth: true
			}]
		}
		myChart.setOption(option)
	}


	render() {
		return(
			<div className="home" ref={(chart) => {this.chart = chart}} style={{ width: 600, height: 400 }}></div>
		) 
	}
}

export default Home 
