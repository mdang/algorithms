import QuickSort from './QuickSort';
import { SortTester } from '../SortTester';

describe('QuickSort', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSort);
  });
});