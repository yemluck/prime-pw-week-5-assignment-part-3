console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let music = {} //  end let music
    music.title = title;
    music.artist = artist;
    music.yearPublished = yearPublished;

    return collection.push(music);
} // end function addToCollection.

addToCollection('Ed Sheeran', 'Perfect', 2017);
console.log('3a. Collection after running function addToCollection', collection);

addToCollection('Mayorukun ft. Davido', 'Bobo', 2018);
console.log('3b. Collection after running function addToCollection', collection);

addToCollection('Ed Sheeran', 'Shape of you', 2017);
console.log('3c. Collection after running function addToCollection', collection);

addToCollection('Runtown', 'Mad over you', 2017);
console.log('3d. Collection after running function addToCollection', collection);

addToCollection('Bad Wolves', 'Zombie', 2018);
console.log('3e. Collection after running function addToCollection', collection);

addToCollection('The Fray', 'How to save a life', 2005);
console.log('3f. Collection after running function addToCollection', collection);

