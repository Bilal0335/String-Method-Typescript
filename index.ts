//! String Method Correct
const log = console.log


//* Length
let len = 'Bilal Hussain'
// log(len.length)

//* chartAt(index)
// log(len.charAt(3))

//* concate
// let conc = 'Hussain'
// let conca = 'Muhammad '
// let res = conca + len + conc
// log(res)

//* includes(substring)
// log(len.includes("Hussain"))  //true
// log(len.includes("Muhammad")) //false

//* indexOf(substring,start)
// const paragraph = "Ruth's dog is cuter than your dog!"
// let searchTerm = 'dog'

// let indexOfFirst = paragraph.indexOf(searchTerm)
// console.log(`The index of first ${searchTerm} is ${indexOfFirst}`)

// let indexOfSecond = paragraph.indexOf(searchTerm, indexOfFirst + 1)
// console.log(`The index of second ${searchTerm} is ${indexOfSecond}`)

// let indexOfThird = paragraph.indexOf(searchTerm, indexOfSecond + 1)
// console.log(`The index of third ${searchTerm} is ${indexOfThird}`)

// const str = "Brave new world";
// console.log(str.indexOf("w")); // 8
// console.log(str.indexOf("new")); // 6

//* lastIndexOf(substring,start)
//1.  lastIndexOf(searchString)
//2.  lastIndexOf(searchString, position)

// "canal".lastIndexOf("a"); // returns 3
// "canal".lastIndexOf("a", 2); // returns 1
// "canal".lastIndexOf("a", 0); // returns -1
// "canal".lastIndexOf("x"); // returns -1
// "canal".lastIndexOf("c", -5); // returns 0
// "canal".lastIndexOf("c", 0); // returns 0
// "canal".lastIndexOf(""); // returns 5
// "canal".lastIndexOf("", 2); // returns 2

// const paragraph = "Ruth's dog is cuter than your dog!"
// log(paragraph.lastIndexOf("dog"))
// log(paragraph.lastIndexOf("dog",7))

//* slice(start,end)
// const str = 'The quick brown fox jumps over the lazy dog.'
// log(str.slice(10))
// log(str.slice(10,25))
// log(str.slice(-4))
// log(str.slice(-9,-5))

//* substring(start, end)  (0 sy strat ho ta hy , end?)
// const str = 'The quick brown fox jumps over the lazy dog.'
// log(str.substring(10))
// log(str.substring(4,9))
// log(str.substring(str.length-6))

// const str = 'Mozilla'
// console.log(str.substring(1, 3))
// console.log(str.substring(2))
// console.log(str.substring(str.length - 5))

//*  substr(start,length)
// const str = "Mozilla"
// console.log(str.substr(3,6))
// console.log(str.substr(2))
// console.log(str.substr(2,4))

//* toUppercase
// const str = "mozilla"
// log(str.toUpperCase())

//* toLowerCase
// log(str.toLowerCase())

//* split()
// const str =
//   '               The quick brown fox jumps over the lazy dog.                  '
// let word = str.split(' ')
// log(word)
// log(word[4])

// let char = str.split(' ')
// log(char[2])

// log(str.split(","))

//* replace
// let replStr = str.replace("dog",'cat')
// let replStr = str.replace("lazy",'fast')
// log(replStr)

//* trim
// log(str.trim())

//* startwith
// const str1 = 'Saturday night plans'
// console.log(str1.startsWith('Sat'))
// console.log(str1.startsWith('Sat', 3))

//*endwith
// const str1 = 'Cats are the best! best'
// console.log(str1.endsWith('best!'))
// console.log(str1.endsWith('best', 17))

// const str2 = 'Is this a question?'
// console.log(str2.endsWith('question'))

//* repeat(cout)
// const str1 = 'Cats are the best!\n'
// log(str1.repeat(4))

//* match(regex) [] , null: Retrieves the matches of a string against a regular expression.

let text = `The rain in SPAIN stay mainly in the plain.`
// let res1 = text.match('ain')
// log(res1)
// let res = text.match(/ain/)
// log(res)
// let res2 = text.match(/ain/g)
// log(res2)
// let res3 = text.match(/ain/gi)
// log(res3)
// let res4 = text.match(/w/)
// log(res4)

// let res = text.match(/[A-Z]/g)
// log(res)


// const texts = "Visit our website at https://example.com for more information.";
// const urls = texts.match(/https?:\/\/\S+/g)
// urls.forEach(url => console.log(url))

// const texts = "Visit our website at https://example.com for more information.";
// const urls = texts.match(/https?:\/\/\S+/g);

// urls.forEach(url => console.log(url)); // This will log each URL


// const texts = "Visit our website at https://facebook.com for more information.";
// const urls = texts.match(/https?:\/\/\S+/g);

// if (urls) {  // Check if urls is not null
//     urls.forEach(url => console.log(url)); // This will log each URL
// } else {
//     console.log("No URLs found");
// }


// const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));
// Expected output: 41

// console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"


// let texts = "Mr. Blue has a blue house";
// let position = texts.search("Blue");
// let position = texts.search("blue"); 
// let position = texts.search(/Blue/); 
// let position = texts.search(/blue/); 
// let position = texts.search(/blue/i); 
// console.log(position);



//* localCompare()
// let _a1 = 'a'
// let _a2 = 'b'
// let _a2 = 'a'

// log(_a1.localeCompare(_a2))


//*padStrat
let aaa = 6
log(aaa.toString().padStart(4,'00'))

//*endstart()
log(aaa.toString().padEnd(5,'99'))