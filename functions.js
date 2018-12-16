const minimum = (number1, number2) => {
    return number1 < number2 ? number1 : number2;
  };
  
  console.log(minimum(9, 9));
  
  const isEven = number => {
    if (number < 0) number *= -1;
    if (number === 0) {
      return true;
    } else if (number === 1) {
      return false;
    }
    return isEven(number - 2);
  };
  
  console.log(isEven(-10));
  
  const countBs = str => {
    return str.split("").reduce((acc, v) => (v === "B" ? ++acc : acc), 0);
  };
  
  console.log(countBs("gagrBDGSEB"));
  
  const countChar = (str, char) => {
    return str.split("").reduce((acc, v) => (v === char ? ++acc : acc), 0);
  };
  
  console.log(countChar("sdhhtdjdsfsrgtdjgujfse", "s"));
  