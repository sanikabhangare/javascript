str1 = 'Sanika'
str2 = "Narayan"
str3 = `Bhangare`

str4 = str1+ " " +str2+ " " +str3
console.log(str4);

str5 = str1.concat(' ',str2,' ',str3);
console.log(str5);


name1 = "Roshani"
console.log(`Hello ${name1}`)   //template literel (``)compulsory
console.log(str5.length);

console.log(str5[3])
console.log(str5.charAt(8)) 

strCapital = str5.toUpperCase()
strLowercase = str5.toLowerCase()
console.log("Capital Case", strCapital, "Lower case", strLowercase)
console.log(`Capital case ${strCapital} ***** Lower case ${strLowercase}`)


// .indexOf(), lastIndexOf(), .includes(), .startsaWith(), .endsWith()

str6 = "Don't be busy. be Productive. !!!" 
console.log(str6.indexOf('be'))
console.log(str6.lastIndexOf('be'))
console.log(str6.includes('busy'))
console.log(str6.startsWith('D'))
console.log(str6.endsWith('!'))

// .slice(), .substring(), .substr()
console.log(str6.slice(0,5))
console.log(str6.substring(5))
console.log(str6.substr(8))

// .trim(), trimStart(), trimEnd()

str7 = '     HELLO  '
console.log(str7.length)
console.log(str7.trim().length)
console.log(str7.trimStart().length)
console.log(str7.trimEnd().length)

// .replace() and .replaceAll()

console.log(str6)
console.log(str6.replace('be','let mind'))
console.log(str6.replaceAll('be','let mind'))

// .split()

arr1 = str5.split(' ')
console.log(arr1)

numberString = '12:34:56:78:90'
numArray = numberString.split(':')
console.log(numArray)

strnew = numArray.join(':')
console.log(strnew)