/*import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { InView } from 'react-intersection-observer';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChart: false
    };
  }

  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2',
      title: {
        text: 'Just Another Random Graph'
      },
      axisY: {
        includeZero: true
      },
      data: [{
        type: 'column',
        indexLabelFontColor: '#5A5757',
        indexLabelPlacement: 'outside',
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: 'Highest' },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 21 },
          { x: 120, y: 49 },
          { x: 130, y: 36 }
        ]
      }]
    };

    return (
      <InView
        as="div"
        onChange={(inView) => {
          if (inView) this.setState({ showChart: true });
        }}
      >
        {this.state.showChart && (
          <CanvasJSChart options={options} />
        )}
      </InView>
    );
  }
}

export default App;*/
