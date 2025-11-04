const name = "Aqib"
const repoCount = 50

//console.log(name + repoCount + "Jangla"); // outdated

//console.log(`Hello my name is ${name } and my repo count is ${repoCount}`);

// ${} isko string interpolation kaha jata hy 

const gameName = new String('Mahar-Aqib-jangla')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//onsole.log(gameName.charAt(2));
//console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 3)
//console.log(newString);


const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newString1 = "   Aqib    "
console.log(newString1);
console.log(newString1.trim());

const url =  "https://aqib.com/aqib%20mahar"

console.log(url.replace('%20', '-'));

 console.log(url.includes('jangla'));

 console.log(gameName.split('-'));
 