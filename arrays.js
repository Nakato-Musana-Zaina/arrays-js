//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
let arr2 = [true,"green", "where",12,56];
console.log(arr1.slice(-1));
console.log(arr2.slice(-1));





//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(stringmyPets.toString())




//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 console.log(arr3.sort())


//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", let people = [];
let duplicates = [];
arr.forEach(person =>{
    if (!people.includes(person)) {
        people.push(person);
    }
    else(duplicates.push(person));
});
console.log({people});
console.log({duplicates});
 "woman"];



//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
 let otherarr5 = arr5.find("food")
if




//Write a JS script to sort the following string:let word = "renniw"
// let word = "renniw"
 let newword = word.split("").word.sort()
 console.log(newword.join(""))



//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruit = [ "Mango","Grapes","apples","Lemons","Oranges","Kiwi","guava", "jackfruit","tangerine"," avocado",]
let newfruit = fruit.slice(0,5) + " Tomato" 
let newfruits = newfruit + fruit.slice(5,11)
console.log(newfruits)

