console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    } //  end let album
    collection.push(album);
    return album
} // end function addToCollection.

console.log(addToCollection('Perfect', 'Ed Sheeran', 2017));

console.log(addToCollection('Bobo','Mayorukun ft. Davido', 2018));

console.log(addToCollection('Shape of you','Ed Sheeran', 2017));

console.log(addToCollection('Mad over you','Runtown', 2017));

console.log(addToCollection('Zombie','Bad Wolves', 2018));

console.log(addToCollection('How to save a life','The Fray', 2005));

console.log(collection); // end test


// Function to show the collections
function showCollection(array){
    console.log('Number of albums in the collection', array.length)
    for(let x of array){
        console.log(`Song title is ${x.title} by ${x.artist} and it was published in ${x.yearPublished}.`)
    } // end for of loop
} // end showCollection
console.log(showCollection(collection));








/*
Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

- Test the `showCollection` function.
*/