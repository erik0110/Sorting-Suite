function genRandomNumberArray(count) {
  let numbers = [];
  let max = 1000;//maybe 10,000 or 20,000

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);
    numbers.push(randomNumber)
  }
  return numbers
}

let randomArray = genRandomNumberArray(1000)

// console.log(randomArray)

export default genRandomNumberArray;
