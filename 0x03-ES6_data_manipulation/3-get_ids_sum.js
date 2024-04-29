function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, obj) => sum + obj.id, 0);
  }
  return [];
}
export default getStudentIdsSum;
