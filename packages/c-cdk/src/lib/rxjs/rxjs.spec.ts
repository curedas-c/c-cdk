// import dayjs from '../external-deps/dayjs.lib';
import { ofDelay } from './rxjs';
import { randomInteger } from '../utils/math';

describe('ofDelay', () => {
  it('should emit after 2500ms', done => {
    const data = 'ofDelay';
    const observable$ = ofDelay(data);
    const startTime = new Date().getTime();

    observable$.subscribe(result => {
      const endTime = new Date().getTime();
      expect(result).toBe(data);
      expect(endTime - startTime).toBeGreaterThanOrEqual(2500);
      done();
    });
    
    jest.advanceTimersByTime(4000);
  });

  it('should emit after specified delay', done => {
    const data = 'ofDelay';
    const delay = randomInteger(1000, 5000);
    const observable$ = ofDelay(data, delay);
    const startTime = new Date().getTime();

    observable$.subscribe(result => {
      const endTime = new Date().getTime();
      expect(result).toBe(data);
      expect(endTime - startTime).toBeGreaterThanOrEqual(delay);
      done();
    });
    
    jest.advanceTimersByTime(6000);
  });
});
