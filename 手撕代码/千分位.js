function addThousandSeparator (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


}

const number = 1000000
const formattedNumber = addThousandSeparator(number)
console.log(formattedNumber) // 输出 "1,000,000"
