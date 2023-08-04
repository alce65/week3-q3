/* eslint-disable arrow-body-style */

const makeAsync = (time, callback) => {
  return setTimeout(() => {
    const data = 22;
    callback(data);
  }, time);
};

makeAsync(1000, (data) => {
  const result = data * 2;
  console.log(result);
});
