const operationHour = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const operationMin = [0, 30];
let instructorTime = [
  { start: 9, end: 12.5 },
  { start: 14, end: 17 },
];

// console.log(15*24*3600 + 1800);

// let timeBooked = [34200, 55800];
let timeBooked = [55800];

const availableHour = (operationHour, instructorTime, timeBooked) => {
  return operationHour
    .filter((hour) => {
      return instructorTime.length
        ? instructorTime.some(
            (range) =>
              hour * 3600 >= range.start * 3600 &&
              hour * 3600 <= range.end * 3600 - 90 * 60
          )
        : true;
    })
    .filter((ele) => {
      return !timeBooked.some(
        (time) =>
          ele * 3600 > time - 90 * 60 &&
          ele * 3600 < time + 90 * 60 &&
          ele * 3600 + 1800 > time - 90 * 60 &&
          ele * 3600 + 1800 < time + 90 * 60
      );
    });
};

const availableMinutes = function (
  operationMin,
  instructorTime,
  timeBooked,
  hour
) {
  return operationMin.filter((min) => {
    return (
      !timeBooked.some(
        (time) =>
          hour * 3600 + min * 60 > time - 90 * 60 &&
          hour * 3600 + min * 60 < time + 90 * 60
      ) &&
      (instructorTime.length
        ? instructorTime.some(
            (range) =>
              hour * 3600 >= range.start * 3600 &&
              hour * 3600 + min * 60 <= range.end * 3600 - 90 * 60
          )
        : true)
    );
  });
};

export { availableHour, availableMinutes };
