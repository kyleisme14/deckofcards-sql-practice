const { 
    Deck, 
    Suit,
    Color,
    Card
} = require("./models");


// Color.create({
//     name: 'Red',
//     suit: ['Diamonds', 'Hearts'],
//     card: ['Ace', '2','3','4','5', 'King']
// })
// .then(function(newColor) {
//     console.log('NEW Color', newColor);
//     // Add album
//     newColor.createSuit({
//         name: 'Diamond'
//     })
//     .then(function(newSuit) {
//         console.log('NEW Suit', newSuit.toJSON())
//     })
// })
// .catch(function(error) {
//     console.log(error);
// });

Card.create({
    suit: 'Hearts',
    color: 'red',
    number: 2,
    name: 'two of hearts'
})
.then(function(newCard){
    console.log('NEW Card', newCard.toJSON());
})
.catch(function(error) {
    console.log('ERROR', error);
})

// find Drake in DB
// Artist.findOne({
//     where: { name: 'Drake' }
// })
// .then(function(artist) {
//     console.log('FOUND ARTIST', artist.toJSON());
//     // find the album in the database (Certified Lover Boy)
//     // --------------------------------------------
//     Album.findOne({
//         where: { title: 'Certified Lover Boy' }
//     })
//     .then(function(album) {
//         console.log('FOUND ALBUM', album.toJSON());
//         artist.addAlbum(album); // artistId will get added to the album
//         artist.save(); // tell the SQL data to save the information as such....

//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//     })
//     // --------------------------------------------
// })
// .catch(function(err) {
//     console.log('ERROR', err);
// })