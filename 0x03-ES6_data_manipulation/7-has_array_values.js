function hasValuesFromArray(array, set) {
  for (const value of set) {
    if (!array.has(value)) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
