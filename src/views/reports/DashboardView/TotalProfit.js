import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import RateReviewIcon from '@material-ui/icons/RateReview';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalProfit = ({ className, ...rest }) => {
  const classes = useStyles();
  const {
    publishedCount,
    unpublishedCount,
    publishedRCount,
    unpublishedRCount
  } = rest;
  const total_count = publishedCount + unpublishedCount + publishedRCount + unpublishedRCount;
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL POSTS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {total_count}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <RateReviewIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={3}>
              <Grid
                item
                lg={4}
              >
              <Typography
                color="textPrimary"
                variant="subtitle2"
                style={{ fontSize: 10 }}
              >
                Published
              </Typography>
              <Typography
                color="textPrimary"
                variant="caption"
              >
                {publishedCount}
              </Typography>

              </Grid>
              <Grid
                item
                lg={4}
              >
              <Typography
                color="textPrimary"
                variant="subtitle2"
                style={{ fontSize: 10 }}
              >
                Unpublished
              </Typography>
              <Typography
                color="textPrimary"
                variant="caption"
              >
                {unpublishedCount}
              </Typography>

              </Grid>
              <Grid
                item
                lg={4}
              >
              <Typography
                color="textPrimary"
                variant="subtitle2"
                style={{ fontSize: 10 }}
              >
                Replys
              </Typography>
              <Typography
                color="textPrimary"
                variant="caption"
              >
                {unpublishedRCount + publishedRCount}
              </Typography>

              </Grid>

          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
