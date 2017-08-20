function getCallBackClock(cb) {
  setInterval(() => {
    let currentTime = new Date();
    cb(currentTime)
  }, 1000);
}

getCallBackClock((currentTime) => {
  console.log('cb: ' + currentTime);
})