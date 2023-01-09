export default function getStudentIdsSum(myArray) {
  return myArray.reduce(((sum, ele) => sum + ele.id), 0);
}
