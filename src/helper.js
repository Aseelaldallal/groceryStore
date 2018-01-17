export const countFruit = inventory => {
  const modifiedData = {};
  inventory.forEach(element => {
    let fruitName = element[0];
    let quantity = element[1];
    if (modifiedData[fruitName]) {
      modifiedData[fruitName] = modifiedData[fruitName] + quantity;
    } else {
      modifiedData.fruitName = quantity;
    }
  });
  return modifiedData;
};

export const stockUp = (fruitList, quantity) => {
  for (let key in fruitList) {
    fruitList[key] += quantity;
  }
};

export const explain = fruitList => {
  let mod = Object.keys(fruitList).reduce((accumulator, currentValue) => {
    const name = currentValue;
    const amount = fruitList[currentValue];
    const toAppend = `${amount} ${name}`;
    return accumulator.concat(toAppend);
  }, []);
  console.log(mod.join(', '));
};
