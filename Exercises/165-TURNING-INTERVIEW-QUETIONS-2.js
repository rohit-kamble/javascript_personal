// const str = "black2 red1 white3"; => "red black white"

function turningQuetios(str) {
  const arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < arrStr.length; j++) {
      if (
        parseInt(arrStr[i].charAt(arrStr[i].length - 1)) <
        parseInt(arrStr[j].charAt(arrStr[j].length - 1))
      ) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[j];
        arrStr[j] = temp;
      }
    }
  }

  return arrStr.map((item) => item.substring(0, item.length - 1)).join(" ");
}
console.log(turningQuetios("black2 red1 white3"));
