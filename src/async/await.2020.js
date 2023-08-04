// ES2021
export const makePromise = (time) =>
  new Promise((resolve, reject) => {
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

// IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const data = await makePromise(1000);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();
