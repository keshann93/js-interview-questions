// @flow
import SumTimelineMethod from '../leetcode/Easy/371';
import SingleNumber from '../leetcode/Easy/136';
import CanWinNim from '../leetcode/Easy/292';

describe('leetcode', () => {
  test('SumTimelineMethod()', () => {
    expect(SumTimelineMethod(1, -1)).toEqual(0);
    expect(SumTimelineMethod(-1, 1)).toEqual(0);
    expect(SumTimelineMethod(1, 2)).toEqual(3);
    expect(SumTimelineMethod(10, 20)).toEqual(30);
  });
  test('SingleNumber()', () => {
    expect(SingleNumber([1])).toEqual(1);
    expect(SingleNumber([1, 1, 2, 2, 3, 3, 4])).toEqual(4);
  });
  test('CanWinNim()', () => {
    expect(CanWinNim(4)).toEqual(false);
  });
});
