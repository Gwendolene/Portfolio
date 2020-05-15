var	pop = document.querySelector('.pop');
var GalleryItems = document.querySelectorAll('.work ul li a');
var close = document.querySelector('.pop .close');

GalleryItems.forEach ( function(item) {

item.addEventListener('click', function(){
	var theImg = item.querySelector('img').cloneNode();
 pop.classList.add('show');
 pop.append(theImg);
})



})


close.addEventListener('click', function(){

	pop.classList.remove('show');

	if (pop.querySelector('img')) {pop.querySelector('img').remove()}

})
var listItems =  document.querySelectorAll('.work ul li');

var listOfitems = [... document.querySelectorAll('.work ul li')]
// var shop = ['hello kitty', 'poop', 'depression'];
// var shopforTwo = [1,4,5,6]

// shop[1].innterText

// console.log(shop);



	// 
	

// var num1 = 5;
// var num2 = 10;

// var str1 = 'this is a long string';
// var str2 = 'short string';

// if (str1.length >= 20) {console.log('CONGRATULATIONS!')} else {console.log('WRONG HAHA!')}

// if (num1 === 6) {console.log(true)} else {console.log('poop')}
// console.log

// if (num1 + num2 === 10) {console.log(false)} else (console.log(true))

// function someName() {

// 	console.log('A string of words')
// }

// someName();


// function logger() { 
// 	console.log('log')
// }

// document.addEventListener ('click', logger);
// var heading = document.querySelector('h1')

// document.addEventListener ('keydown', function logger(){
// 	console.log('hello')

// });
