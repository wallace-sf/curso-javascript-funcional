const { map } = require("rxjs/operators");

const removeIfOnlyNumbers = () =>
  map((arr = []) =>
    arr.filter((el) => {
      const parsedElement = parseInt(el);

      return parsedElement !== parsedElement;
    })
  );

module.exports = { removeIfOnlyNumbers };
