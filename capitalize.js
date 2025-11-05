function capitalize(str) {
  if (str || str === "") {
    let firstChar = str.slice(0, 1);
    return firstChar.toUpperCase() + str.slice(1);
  }
}

export { capitalize };
