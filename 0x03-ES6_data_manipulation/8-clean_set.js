function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValue = [...set].filter((value) => value.startsWith(startString));
  const cleanedValue = filteredValue.map((value) => value.slice(startString.length));
  return cleanedValue.join('-');
}
export default cleanSet;
