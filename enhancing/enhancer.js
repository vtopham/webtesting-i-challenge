module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++;
  };
  return { ...item };
}

function fail(item) {
  //if the enhancement is less than 15, durability decreased by 5
  if (item.enhancement < 15) {
    if (item.durability <= 5) {
      item.durability = 0;
    } else {
      item.durability = item.durability - 5;
    };
  } else {
    //otherwise durability is decreased by 10
    if (item.durability <= 10) {
      item.durability = 0;
    } else {
      item.durability = item.durability - 10;
    };
  }
  //if the level is greater than 16, decrement the enhancement
  if (item.enhancement > 16) {
    item.enhancement--;
  };
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
