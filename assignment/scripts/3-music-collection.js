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

console.log(addToCollection('Ed Sheeran', 'Perfect', 2017));

console.log(addToCollection('Mayorukun ft. Davido', 'Bobo', 2018));

console.log(addToCollection('Ed Sheeran', 'Shape of you', 2017));

console.log(addToCollection('Runtown', 'Mad over you', 2017));

console.log(addToCollection('Bad Wolves', 'Zombie', 2018));

console.log(addToCollection('The Fray', 'How to save a life', 2005));

console.log(collection); // end test



function showCollection(array){


} // end showCollection









/*
Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

- Test the `showCollection` function.
*/