const hexStringToRGB = (hexString) => ({r: '0x' + hexString[1] + hexString[2] | 0, g: '0x' + hexString[3] + hexString[4] | 0, b: '0x' + hexString[5] + hexString[6] | 0});


const hexStringToRGBWithHelper = (hexString) => (
 {r: convert(hexString[1], hexString[2]), g: convert(hexString[3], hexString[4]), b: convert(hexString[5], hexString[6])}
)

const convert = (str1, str2) =>  '0x' + str1 + str2 | 0
