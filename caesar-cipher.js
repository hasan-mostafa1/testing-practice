function caesarCipher(plainText, key) {
  let cipherText = plainText.split("").map((value) => {
    return encrypt(value, key);
  });
  return cipherText.join("");
}

function encrypt(value, key) {
  const alphabet = "abcdefghigklmnopkrstuvwxyz";
  if (alphabet.includes(value.toLowerCase())) {
    const oldIndex = alphabet.indexOf(value.toLowerCase());
    const newIndex = (oldIndex + key) % alphabet.length;

    return value !== alphabet[oldIndex]
      ? alphabet[newIndex].toUpperCase()
      : alphabet[newIndex];
  }
  return value;
}

export { caesarCipher };
