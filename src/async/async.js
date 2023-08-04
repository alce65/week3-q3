/* eslint-disable arrow-body-style */
// ES8 / ES2017

export const foo = async () => {
  const n = Math.random();
  if (n > 0.5) return 33;
  throw new Error();
};

foo()
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
