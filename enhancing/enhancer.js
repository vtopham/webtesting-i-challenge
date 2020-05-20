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
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
