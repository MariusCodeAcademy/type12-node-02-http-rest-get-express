const casual = require('casual');

function fakeName() {
  return casual.first_name + ' ' + casual.last_name;
}

module.exports = {
  fakeName,
};
