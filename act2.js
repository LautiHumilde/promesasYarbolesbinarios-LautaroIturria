function multiplyByThree(num){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num*3)
    }, 2000);
  })
}

function addFive(num){
  return new Promise((res) => {
    res(num + 5)
  })
}
multiplyByThree(2).then(addFive).then((res) => console.log(res))