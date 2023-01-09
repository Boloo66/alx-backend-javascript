export default function getListStudentIds(myArray) {
  if (Array.isArray(myArray)) {
    return myArray.map((ele) => ele.id);
  }
  return [];
}
