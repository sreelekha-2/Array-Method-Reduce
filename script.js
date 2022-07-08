//1.reducing
const fstArr = [
  { name: 'a', values: [1, 2] },
  { name: 'b', values: [3] },
  { name: 'a', values: [4, 5] },
];

const newArr = fstArr.reduce((initialArr, curr) => {
  let obj = initialArr.find((item) => item.name === curr.name);
  if (obj) {
    let index = initialArr.indexOf(obj);
    initialArr[index].values = obj.values.concat(curr.values);
  } else {
    initialArr.push(curr);
  }

  return initialArr;
}, []);
console.log(newArr);

//2.removing not numbers

const arr = [2, 'a', 4, 'b', 3, 5, 'c'];

const numberArr = arr.filter((item) => {
  if (typeof item === 'number') {
    return item;
  }
});

console.log(numberArr);
