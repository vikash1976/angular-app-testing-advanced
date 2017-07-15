import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {
  const pipe = new TitlecasePipe();
  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });
  it('should work with empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });
  
  it('should titlecase given string input', () => {
    expect(pipe.transform('wow')).toEqual('Wow');
  });
  
  it('should throw error with invalid values', () => {
    //must use arrow function for expect to capture exception
    expect(()=>pipe.transform(undefined)).toThrow();
    expect(()=>pipe.transform(9)).toThrowError('Requires a String as input');
  });
});
