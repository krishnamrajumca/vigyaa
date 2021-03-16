import moment from 'moment';
import _ from 'lodash';

export default (data,fillObj,dates,key) => {
  const {start_date, end_date} = dates;
  const diff = moment(end_date).diff(moment(start_date),'days');
  var temp = [];
  for(var i =0;i<=diff;i++){
    const date = moment(start_date).add(i,'days').format("YYYY-MM-DD");
    const obj = _.find(data, function(o) { return o[key] == date });
    if(obj){
      temp.push(obj)
    }
    else{
      let ob = {...fillObj};
      ob[key] = date;
      temp.push(ob)
    }
  }
  return temp;
}
