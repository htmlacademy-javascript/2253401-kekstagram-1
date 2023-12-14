//палиндром

const isPalindrome = (string) => {
  const anyString = string.toLowerCase();

  let reverseString = '';
  for (let i = anyString.length - 1; i >= 0; i--) {
    reverseString += anyString.at(i);
  }

  return anyString === reverseString;
};

isPalindrome('топот');

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/
const extractNumber = (string) => {
  string = string.replace(/\D/g,'') || Math.abs (string);

  return Number(string);
};

extractNumber('23gf37');

//Функция, которая принимает три параметра
const makeNewString = (string, minLength, additionalSymbol) => {
  const lengthString = minLength - string.length;

  if (lengthString <= 0) {
    return string;
  }

  return additionalSymbol.slice (0, lengthString % additionalSymbol.length) +
additionalSymbol.repeat(lengthString / additionalSymbol.length) + string;
};
makeNewString('1', 4, '0');

//Проверка длины
const checkStringLength = (string, length) => string.length <= length;

checkStringLength ('проверяемая строка', 20);
