import expect from 'expect';
import parse from '../src/parse';

describe('parse', () => {
  it('should return null when string equals null', () => {
    const actual = parse('null');
    const expected = { unix: null, natural: null };
    expect(actual).toEqual(expected);
  });
  it('should return null when string equals nothing', () => {
    const actual = parse('');
    const expected = { unix: null, natural: null };
    expect(actual).toEqual(expected);
  });
  it('should return null when string equals xxx', () => {
    const actual = parse('xxx');
    const expected = { unix: null, natural: null };
    expect(actual).toEqual(expected);
  });
  it('should return unix and natural time when given valid natural date', () => {
    const actual = parse('Jan 15 2015');
    const expected = { unix: '1421298000', natural: 'January 15, 2015' };
    expect(actual).toEqual(expected);
  });
  it('should return unix and natural time when given valid timestamp', () => {
    const actual = parse('1421298000');
    const expected = { unix: '1421298000', natural: 'January 15, 2015' };
    expect(actual).toEqual(expected);
  });
});
