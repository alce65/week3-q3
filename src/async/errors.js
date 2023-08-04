export const foo = () => {
  const n = Math.random();
  if (n > 0.5) {
    return n;
  }

  throw new Error('Error number ' + n);
};

try {
  console.log(foo());
} catch (error) {
  console.log(error.message);
}

console.log('Gracias amigo');
