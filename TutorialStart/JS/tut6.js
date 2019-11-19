console.log('we are at tut 6 ')

const name = 'Shafique';
const greeting = 'Good Morning';
console.log(greeting + " " + name);

let html;
html = "<h1>This is heading</h1>" +
        "<p>This is my para</p>";

html = html.concat('this', ' str2');

console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt('3'));
// console.log(html.endsWith('<'));
// console.log(html.endsWith('str2'));
// console.log(html.includes('is'));
// console.log(html.includes('fdfdf'));
// console.log(html.substring(1,4));
// console.log(html.slice(0,4));
// console.log(html.replace('This', 'It'));


let fruit1 = 'Orange\'';
let fruit2 = 'Apple';

let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p>You like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = myHtml;

