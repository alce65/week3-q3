/* eslint-disable arrow-body-style */
// ES6 / ES2015

export const makePromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        const data = 22;
        resolve(data);
      } else {
        reject(new Error('Error number ' + n));
      }
    }, time);
  });
};

// Sample
// const p = new Promise();
//
// p.then(() => {})
//   .catch(() => {})
//   .finally(() => {});

makePromise(1000)
  .then((data) => {
    const result = data * 2;
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('Gracias');
  });
