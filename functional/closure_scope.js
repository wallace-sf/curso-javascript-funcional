const x = 3;

const out = () => {
  const x = 97;

  return () => x + 3;
};

module.exports = out();
