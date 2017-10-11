import './index.css';

document.getElementById('root').innerHTML = 'Hello World';




// let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// let storyWords = story.split(' ');

// console.log(storyWords.filter(function(words){
// return words.length;
// }) );
            



// let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// let overusedWords = ['really', 'very', 'basically'];

// let storyWords = story.split(' ');
// console.log(storyWords.length);




//========option 1=====

// let overusedWords = ['really', 'very', 'basically'];//overused words

// let counter = 0;//set counter at 0
// overusedWords.forEach(function(ouw){//iterate through overused words array 
//   if(overusedWords.includes(ouw)){//if overused words are included 
//       counter += 1;//add 1 to the counter
//      }
// });

// console.log(counter);//log how many times they appeared


//======option 2====

// let overusedWordsCountFunc = function() {	//create over used words function to call later
// let overusedWordsCount = 0;	//set overused words count at 0
// for(let i=0; i<storyWords.length; i++){//run loop as long as the entire story words array
//   for(let j=0; j<overusedWords.length; j++) {//run inside 
//     if(storyWords[i] === overusedWords[j]) overusedWordsCount++;//if item in storyWords has items from overUsed  ADD 1 to overusedword count
//   }
// }
// return overusedWordsCount;
// }

// console.log(overusedWordsCountFunc());//call the function





// let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//solution 3 - BAD

// let betterWords = storyWords.filter(function(word){
//   if (!unnecessaryWords[0] === word && !unnecessaryWords[1] === word && !unnecessaryWords[2] === word) {
//       return true; 
//     }else {
//       return false; 
//     }
// });

//if extremely does not appear in the storywords array, we return true which means we throw it in the betterwords array


//solution 4 - Good
// const blacklist = ['extremely', 'literally', 'actually' ];

// const isBlacklistedWord = (word) => blacklist.includes(word)

// let whiteListed = storyWords.filter((word => !isBlacklistedWord(word)));

// console.log(whiteListed);
// console.log(isBlacklistedWord);


//solution 5 - BAD

// let betterWords = storyWords.filter(function(word){
//   if (!unnecessaryWords[0] === word){
//   return true;
//   } else if (!unnecessaryWords[1] === word) {
//       return true; 
//     } else if(!unnecessaryWords[2] === word) {
//       return true; 
//     }else {
//       return false; 
//     }
// });

//Solution #5


//As you iterate over storyWords (you can use the .filter() method to do this), 
//if unnecessaryWords does not include the current word, you can return that word to the betterWords array.

//The .includes() method may prove useful.
// const blacklist = ['extremely', 'literally', 'actually' ];

// const whiteListed = storywords.filter(function(word) {
// 	if (whiteListed.includes(blacklist) {
// 		return word;
// 	}
// });





		//=====Option 1======

		// let sentence = function() {
		// let sentenceCounter = 0;
		// storyWords.forEach(function(word) { //for this line, the forEach is defining a function that will be run for each item in the storyWords array, and that value will be set to word
		   
		// if(word[word.length-1] === '.' || word[word.length-1] === '!') {
		// sentenceCounter += 1;
		// }
		// })
		// console.log(sentenceCounter);
		// return sentenceCounter;
		// }
		// sentence();

		/*"hello"[4] is going to return the o
		
		"hello"[ ("hello").length - 1]

		becomes:
		"hello"[(5) - 1]

		=== string.length -1 will always give us the index of the last character in a string ====

		exactly, because word.length is going to return 4 because the string has 
		4 characters, 4 - 1 is 3, which is the index we use to get the last character in the string
*/ 

		/*Also forEach is best to use this in this case because just want to loop over the array and execute the callback
		instead of filter -  which executes the callback and check its return value. 
		And lastly, you want to call your sentence function to action. sentence(); 
		

		And one more thing

		Because you want to wrap all of the code including your loop and if statement
		in a function which you can call the function later on in the program and access its values.
		You also need that sentenceCounter to be outside of the .forEach and for it all to be a part of one thing,
		you need the sentence function 
		*/

		//=====option 2=====

		// let sentence = function() {//create function called sentence
		//   let sentencesCount = 0;// start sentence count at 0
		// for (let i=0;i<story.length; i++){//iterates full length of array
		//   if(story[i] === '.' || story[i] === '!') { //if story array contains an . or !, add 1 to the sentenceCount
		//   	sentencesCount ++;
		//   }
		// }
		// return sentencesCount;
		// }




		// console.log(storyWords.length);
		// console.log( sentence() );
		// console.log(overusedWords.length);


		// function typeInfo(storyWords, sentence, overusedWordsCount){
		//   console.log(`Total word count is: ${storyWords}`);
		//   console.log(`There are ${sentence} sentences`);
		//   console.log(`The number of times overUsed words were used were ${overusedWordsCountFunc}`);
		// };

		// console.log( typeInfo() );

		// console.log(betterWords.join(' '));


		//==========Final version========

		let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

		let storyWords = story.split(' ');


		let overusedWords = ['really', 'very', 'basically'];


		//option 2
		let overusedWordsCountFunc = function() {
		let overusedWordsCount = 0;
		for(let i=0; i<storyWords.length; i++){
		  for(let j=0;j<overusedWords.length;j++) {
		    if(storyWords[i] === overusedWords[j]) overusedWordsCount++;
		  }
		}
		return overusedWordsCount;
		}




		let unnecessaryWords = ['extremely', 'literally', 'actually' ];

		let betterWords = storyWords.filter(function(word){
		  if (!unnecessaryWords.includes(word)) {
		  return true;
		  } else {
		      return false; 
		    }
		});




		//option 2
		let sentence = function() {
		  let sentencesCount = 0;
		for (let i=0;i<story.length; i++){
		  if(story[i] === '.' || story[i] === '!') {sentencesCount ++;}
		}
		return sentencesCount;
		}



		let func = () => {
		 
		console.log(`Total word count is: ${storyWords.length}`);
		console.log(`There are ${sentence()} sentences`);
		console.log(`The number of times overUsed words were used were ${overusedWordsCountFunc()}`);
		}
		console.log(betterWords.join(' ') );

		func();

















