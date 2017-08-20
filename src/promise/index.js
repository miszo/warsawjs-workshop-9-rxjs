function fetchData(url) {
  return new Promise(function(resolve, reject) {
    const httpReq = new XMLHttpRequest();
    httpReq.open('get', url, true);
    httpReq.addEventListener('load', function() {
      resolve(httpReq.response);
    });
    httpReq.addEventListener('error', function(err) {
      reject(error);
    });
    httpReq.send();
  });
}

fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log(data);
  }).catch(err => {
    console.error(err);
  });