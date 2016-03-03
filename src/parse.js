import moment from 'moment';

export default function(s) {
  const time = moment(s,
    [
      'MM DD YYYY',
      'MMM DD YYYY',
      'MMMM DD YYYY',
      'MM DD YY',
      'MMM DD YY',
      'MMMM DD YY',
      'X',
      'x',
    ], true);

  const valid = time.isValid();

  if (!valid)
    return { unix: null, natural: null };

  const unixTime = time.format('X');
  const naturalTime = time.format('MMMM DD, YYYY');

  return { unix: unixTime, natural: naturalTime };

};
