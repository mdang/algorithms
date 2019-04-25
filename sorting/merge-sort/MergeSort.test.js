import MergeSort from './MergeSort';
import { SortTester } from '../SortTester';

describe('MergeSort', () => {
  it('should sort array', () => {
    SortTester.testSort(MergeSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(MergeSort);
  });
});