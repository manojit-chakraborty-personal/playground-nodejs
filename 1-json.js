const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// console.log(bookJSON);

// const parsedJSON = JSON.parse(bookJSON)

// console.log(parsedJSON.title)

// const bufferData = fs.readFileSync('1-json.json')
// // console.log(bufferData);
// const dataJSON = bufferData.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.author);

const bufferData = fs.readFileSync('1-json.json')
const dataJSON = bufferData.toString();
const data = JSON.parse(dataJSON)
data.name = 'Debopriya'
data.age = 25
const dataStringifyJSON = JSON.stringify(data)
fs.writeFileSync('3-json.json', dataStringifyJSON)
