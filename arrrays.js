// array

// myArrr. unshift(9)
// myArr.shift().slice
// myArray =[0,1,2,3,4,5,6,7];
// console.log("A", myArray);
// console.log(myArray.slice(1,3));

// myArray2 = myArray;
// console.log("B",myArray2);
// console.log(myArray2.splice(1,3));

// Ist way too cacate 


 const marvel_heros =["thor","Ironman", "Panther"];
 const Dc_heros =["Superman","Batman","Wonder_woman" ];
// const allHeros = marvel_heros.concat(Dc_heros);
// console.log(allHeroes);

// IInd way to cancate 

const All_new_heros =[...marvel_heros,...Dc_heros];

console.log(All_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]]

const real_another_array  = another_array.flat(Infinity);
 console.log(real_another_array);
 
console.log(Array.isArray("ARYAN"));
 console.log(Array.from("Aryan"));





 const score1 = 100;
 const score2 = 200;
 const score3 = 300;


 console.log(Array.of(score1,score2,score3));

