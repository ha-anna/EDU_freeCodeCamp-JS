function convertToRoman(num) {
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let roman = ''
  for (let key of Object.keys(lookup)) {
    let n = Math.floor(num/lookup[key])
    num -= n * lookup[key]
    roman += key.repeat(n)
  }
 return roman
}

convertToRoman(36);
