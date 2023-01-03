export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  // eslint-disable no-unused-var
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }
  
 // eslint-enable no-unused-var
  return [task, task2];
}


console.log(`${taskBlock(true)}`);