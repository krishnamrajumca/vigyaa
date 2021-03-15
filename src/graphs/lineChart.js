/* eslint-disable */
import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class LineChart extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [{
              name: 'XYZ MOTORS',
              data: []
            }],
            options: {
              chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Stock Price Movement',
                align: 'left'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              yaxis: {
                title: {
                  text: 'Price'
                },
              },
              xaxis: {
                type: 'datetime',
              },
              tooltip: {
                shared: false,
              }
            },
          };
        }
        render() {
          const { options, series } = this.state;
          return (
                <div id="chart">
                  <ReactApexChart
                      options={options}
                      series={series}
                      type="area"
                      height={350}
                  />
                </div>
          );
        }
      }
