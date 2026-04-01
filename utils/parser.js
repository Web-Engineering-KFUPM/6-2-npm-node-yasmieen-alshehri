import _ from "lodash";

// #TODO 5.1
export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

