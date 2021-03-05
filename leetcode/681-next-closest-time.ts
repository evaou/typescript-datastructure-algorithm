function nextClosestTime(time: string): string {
  let hourMin = time.split(":");
  let hourVal = +hourMin[0];
  let minVal = +hourMin[1];
  let digitArr = time
    .replace(":", "")
    .split("")
    .map((a) => +a);
  let sortedDigitArr = [...digitArr].sort((a, b) => a - b);
  let tmpHourVal: number;
  let tmpMinVal: number;

  for (let i = digitArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < sortedDigitArr.length; j++) {
      if (sortedDigitArr[j] <= digitArr[i]) {
        continue;
      }

      digitArr[i] = sortedDigitArr[j];
      tmpHourVal = digitArr[0] * 10 + digitArr[1];
      tmpMinVal = digitArr[2] * 10 + digitArr[3];

      if (
        tmpHourVal < 24 &&
        tmpMinVal < 60 &&
        (tmpHourVal > hourVal || tmpMinVal > minVal)
      ) {
        return `${tmpHourVal}:${tmpMinVal}`;
      }

      break;
    }

    digitArr[i] = sortedDigitArr[0];
  }

  tmpHourVal = digitArr[0] * 10 + digitArr[1];
  tmpMinVal = digitArr[2] * 10 + digitArr[3];

  return `${tmpHourVal}:${tmpMinVal}`;
}

let time = "19:34";
console.log(nextClosestTime(time)); // "19:39"

time = "23:59";
console.log(nextClosestTime(time)); // "22:22"
