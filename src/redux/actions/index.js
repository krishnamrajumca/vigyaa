import axios from 'axios';
import StoreConfig from 'src/redux/store';

const { store } = StoreConfig;
const instance = axios.create({
    baseURL: 'https://dev.vigyaa.io/api/api/analytics/',
    headers: {
        'content-type': 'application/json',
    },
});

const fetchLiveUsers = () => {
  return (dispatch) => {
    instance.get('live-users-count').then((response) => {
      dispatch({ type: 'LIVE_USERS', payload: response.data });
    });
  };
};

const fetchSessionsData = (dates) => {
  return (dispatch) => {
    instance.get('session-data', { params: dates }).then((response) => {
      dispatch({ type: 'SESSIONS_DATA', payload: response.data });
    });
  };
};

const fetchReplyData = (dates) => {
  return (dispatch) => {
    instance.get('reply-count-data', { params: dates }).then((response) => {
      dispatch({ type: 'REPLY_DATA', payload: response.data });
    });
  };
};

const fetchPublishedData = (dates) => {
  return (dispatch) => {
    instance.get('published-unpublished-data', { params: dates }).then((response) => {
      dispatch({ type: 'PUBLISHED_DATA', payload: response.data });
    });
  };
};

let prevDates = null;
store.subscribe(() => {
    const { dates } = store.getState().metaReducer;
    console.log(dates, 'dates changed in store');
    if (JSON.stringify(dates) !== JSON.stringify(prevDates)) {
      prevDates = dates;
      if (typeof dates !== 'undefined') {
        if (typeof dates.start_date !== 'undefined') {
          store.dispatch(fetchSessionsData(dates));
          store.dispatch(fetchReplyData(dates));
          store.dispatch(fetchPublishedData(dates));
        }
      }
    }
});

export default {
 fetchLiveUsers
};
