// ES8 / ES2017
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

const main = async () => {
  try {
    const data = await makePromise(1000);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

main();
