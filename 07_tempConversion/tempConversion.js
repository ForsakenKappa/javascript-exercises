const ftoc = function(f) {

  let c = Math.round(((f - 32) * 5 / 9 + Number.EPSILON) * 10) / 10;
  return c

};

const ctof = function(c) {
  let f = Math.round((c * 9/5 + 32 + Number.EPSILON) * 10) / 10;
  return f
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
