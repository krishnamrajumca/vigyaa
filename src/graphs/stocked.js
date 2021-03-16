/* eslint-disable */
import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class StockedChart extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  horizontal: false,
                },
              },
              xaxis: {
                categories: [],
              },
              legend: {
                position: 'right',
                offsetY: 40
              },
              fill: {
                opacity: 1
              }
            },
          };
        }
        static getDerivedStateFromProps(props,state){
          console.log("STOCKED GRAPH",props.data)
          return {
            series: props.data,
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  horizontal: false,
                },
              },
              xaxis: {
                categories: props.labels,
              },
              legend: {
                position: 'right',
                offsetY: 40
              },
              fill: {
                opacity: 1
              }
            },
          }
        }
        render() {
          const { options, series } = this.state;
          return (
                <div id="chart">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={350}
                    />
                </div>
          );
        }
      }
