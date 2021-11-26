console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let music = {} //  end let music
    music.title = title;
    music.artist = artist;
    music.yearPublished = yearPublished;

    return collection.push(music);
} // end function addToCollection.

addToCollection('Davido', 'Dodo', 2013);
addToCollection('Wizkid', 'Caro', 2011);
addToCollection('Runtown', 'Mad over you', 2017)

console.log('1. Collection after running function addToCollection', collection)