// inserts an auto-incremented ID value into data objs to be used as key values in react

export function addKeyValues(arr) {
  // starting point for key value incrementer
  let i = 0;
  const returnArr = arr.map((item) => {
    i++;
    item.id = i;
    return item;
  });
  return returnArr;
}
