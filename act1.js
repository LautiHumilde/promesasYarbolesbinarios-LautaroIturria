function act1(num){
  return new Promise((res,rej) => {
    if(num > 5){
      res("numero aceptado")
    }else{
      rej("numero rechasado")
    }
  })
}

act1(3).then((res) => console.log(res)).catch((error) => console.log(error) )
act1(6).then((res) => console.log(res)).catch((error) => console.log(error) )