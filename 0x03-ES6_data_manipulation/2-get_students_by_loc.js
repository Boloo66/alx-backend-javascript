export default function getStudentsByLocation(myArray, city) {
  if (Array.isArray(myArray)) {
    return myArray.filter((ele) => ele.location === city);
  }
  return [];
}
