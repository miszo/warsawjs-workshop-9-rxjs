const Rx = require('rxjs');
const O = Rx.Observable;

let clock$ = new O(observer => {
  let interval = setInterval(() => {
    observer.next(new Date());
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    observer.error(1);
  }, 10001);

});

clock$.subscribe((data) => {
  console.log(data);
});