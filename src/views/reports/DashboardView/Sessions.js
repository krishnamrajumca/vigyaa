import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import LineChart from 'src/graphs/lineChart'
import BarChart from 'src/graphs/barChart'
const useStyles = makeStyles(() => ({
  root: {}
}));

const Sessions = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { dates, sessions } = rest;
  const [series, setSeries] = useState([]);
  const [labels, setlabels] = useState([])
  const [avgSession, setAvgSession] = useState([]);
  useEffect(() => {
    console.log("Sessions",sessions)
    const visitors = sessions.map(s => s.session_count);
    const session_times = sessions.map(s => s.duration);
    const dateLabels = sessions.map(s => s.created_on);
    const avg = sessions.map(s => s.avg);
    setSeries([{ name: "Visitors", data: visitors }, {name: 'Session Time', data: session_times}]);
    setlabels(dateLabels);
    setAvgSession(avg);
  }, [sessions])

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Sessions"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <LineChart series={[series[0]]} labels={labels} title="Visitors"/>
        </Box>
        <Box
          height={400}
          position="relative"
        >
          <LineChart series={[series[1]]} labels={labels} title="Session Times"/>
        </Box>
        <Box
          height={40}
          position="relative"
        >
          Avg Session Time
        </Box>
        <Box
          height={400}
          position="relative"
        >
          <BarChart series={[series[1]]} labels={labels} title="Avg Session Time"/>
        </Box>
      </CardContent>

    </Card>
  );
};

Sessions.propTypes = {
  className: PropTypes.string
};

export default Sessions;
