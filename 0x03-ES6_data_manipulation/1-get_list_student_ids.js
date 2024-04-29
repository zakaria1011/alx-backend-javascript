function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((obj) => obj.id);
  }
  return [];
}
export default getListStudentIds;
