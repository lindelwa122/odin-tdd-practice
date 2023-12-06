const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const reverseString = (str) => str.split('').reverse().join(''); 

const calculator = (() => {
  const _isFloat = (n) => !(n % 2 === 0 || n % 2 === 1);

  const add = (a, b) => {
    const result = a + b;
    return _isFloat(result) ? +(result.toFixed(2)) : result;
  };
  
  const subtract = (a, b) => {
    const result = a - b;
    return _isFloat(result) ? +(result.toFixed(2)) : result;  
  };

  const multiply = (a, b) => {
    const result = a * b;
    return _isFloat(result) ? +(result.toFixed(2)) : result;
  };

  const divide = (a, b) => {
    const result = a / b;

    if (!isFinite(result)) {
      throw new Error('Division Error: Cannot divide by 0');
    }

    return _isFloat(result) ? +(result.toFixed(2)) : result;
  };

  return { add, subtract, multiply, divide };
})();

const caesarCipher = (key) => {
  const _punc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const _isUpperCase = (char) => char.toUpperCase() === char;

  const cipher = (str, encrypt = true) => {
    const newStr = []
    for (const char of str) {
      const index = _punc.findIndex((val) => val === char.toLowerCase());
      if (index !== -1) {
        let shift = encrypt ? index + key : index - key;
        if (encrypt && shift > 25) {
          shift -= 26;
        } else if (shift < 0) {
          shift += 26;
        }

        const newWord = _isUpperCase(char) ? _punc[shift].toUpperCase() : _punc[shift];
        newStr.push(newWord);
      } else {
        newStr.push(char);
      }
    }

    return newStr.join('');
  }

  const encrypt = (str) => cipher(str);
  const decrypt = (str) => cipher(str, false);

  return { encrypt, decrypt };
}

const analyzeArray = (arr) => {
  const total = arr.reduce((prev, cur) => prev + cur, 0);
  const avg = total / arr.length;
  
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
    average: !(avg % 2 === 0 || avg % 2 === 1) ? +(avg.toFixed(2)) : avg,
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };