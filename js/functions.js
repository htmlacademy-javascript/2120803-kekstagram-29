function verifylength(str, num) {
  return str.length <= num;
}

function isPalindrome(str) {
  const modifyString = str.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = modifyString.length - 1; i >= 0; i--) {
    reverseString += modifyString[i];
  }
  return modifyString === reverseString;
}

function extractDigitsFromString(str) {
  const digits = str.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
  if (digits === '') {
    return NaN; // Если не найдено ни одной цифры, возвращаем NaN
  }
  return parseInt(digits, 10); // Преобразуем строку digits в целое число
}


// Cтрока короче 20 символов
verifylength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
verifylength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
verifylength('проверяемая строка', 10); // false


// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true


// Вырезаем числа со строки
extractDigitsFromString('число123 ура');
