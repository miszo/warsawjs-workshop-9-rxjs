// TODO: przerobić!!!
function getPromiseClock() {
  return new Promise(function(resolve, reject) {
    setInterval(() => {
      let promise = Promise.resolve()
    }, 1000)
    resolve(clock());
  })
}

getPromiseClock().then(data => console.log(data));

