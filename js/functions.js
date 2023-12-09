//палиндром

const isGetPalindrome = (string) => {
  const anyString = string.toLowerCase();

  let reverseString = '';
  for (let i = anyString.length - 1; i >= 0; i--) {
    reverseString += anyString.at(i);
  }
  return anyString === reverseString;
};

isGetPalindrome('топот');

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/
const pullOut = (string) => {
  string = string.replace(/\D/g,'');
  console.log(string);
};

pullOut('23gf37');

//Функция, которая принимает три параметра
const findThreeParametrs = (string, minLenght, additionalSymbol) => {
  const lenghtString = minLenght - string.length;
  if (lenghtString <= 0) {
  return string;
  }
  return additionalSymbol.slice (0, lenghtString % additionalSymbol.length) +
additionalSymbol.repeat(lenghtString / additionalSymbol.length) + string;
};
findThreeParametrs('1', 4, '0');

//Проверка длины
const isLengthCheck = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

isLengthCheck('проверяемая строка', 20);
