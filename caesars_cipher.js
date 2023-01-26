function rot13(str) {
  const rot13 = (letter) => {
    const charCode = letter.charCodeAt();
    return String.fromCharCode(
      ((charCode + 13) <= 90) ? charCode + 13 : (charCode + 13) % 90 + 64)
  }
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot13);
}
