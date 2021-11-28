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
    console.log('Number of albums in the collection', array.length) // number of items in the array
    for(let x of array){
       console.log(`Song title is ${x.title} by ${x.artist} and it was published in ${x.yearPublished}.`)
    } // end for of loop
   
} // end showCollection
showCollection(collection); //to test the function

// Function to search collection by artist
function findByArtist(artist){
    let output = [];
    for(let album of collection){
        if( album.artist === artist){
            output.push(album)
        }  // end of if
    } // end of for of loop
    return console.log(artist, 'has', output.length, 'song(s) in the collection:', output)
} // end findByArtist

findByArtist('Ed Sheeran');
findByArtist('Chris');
findByArtist('Runtown');

/*

Tried the stretch goals but I was getting errors in trying to pass an object as parameter for function

*/