function delay(m){
  return new Promise((res) => {
    setTimeout(() => {
      res("espera completada")
    }, m);
  })
}

delay(6000).then((res) => (console.log(res)))
  .then(() => {
    return delay(2000)
  })
  .then(() => {
    console.log("primera espera completada");
    return delay(4000);
  })
  .then(() => {
    console.log("segunda espera completada");
    return delay(6000);
    })
  .then(() => {
    console.log("tercela espera completada");
  })