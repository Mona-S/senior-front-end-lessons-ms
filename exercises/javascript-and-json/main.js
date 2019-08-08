/* eslint-disable no-console */

var bookArray = [{
  isbn: 'one',
  title: 'The Industries of The Future',
  author: 'Alec'
},

{
  isbn: 'two',
  title: 'Enlightenment Now',
  author: 'Steven'
},

{
  isbn: 'three',
  title: 'Sustainable Energy',
  author: 'David'
}];

var stringJSON = JSON.stringify(bookArray);
console.log('JSONString: ', stringJSON);
console.log('typeof(JSONString): ', typeof (stringJSON));

var studentData = '{ "id": "1" , "name": "Mona" }';

var parseJSON = JSON.parse(studentData);
console.log('ParsedString: ', parseJSON);
console.log('typeof(ParsedString): ', typeof (parseJSON));
