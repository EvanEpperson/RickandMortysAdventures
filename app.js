$(() => {


  $('#firstForm').on('click', (event) => {
    event.preventDefault()
    const userInput = $('input').val()
  })
////////////////////////////////////////////////////////////////////////////////////
// first ajax for characters
////////////////////////////////////////////////////////////////////////////////////
  $.ajax({

        url:`https://rickandmortyapi.com/api/character/`,
        // ${$(event.target).val()}
        type: "GET",
        data: {
          $limit: 10,
        }

      }).then(
        (characters) => {
          for(let i = 0; i < 10; i++){
          console.log(characters.results[0].name);
          const $characters = $('#characters').text(characters.result)
          $('body').append($characters)

            // console.log(character);
          }


      },(error) => {
        console.log(`${error.statusText.toUpperCase()}:bad request`);

      })
    })
////////////////////////////////////////////////////////////////////////////////////
// second ajax for locations
////////////////////////////////////////////////////////////////////////////////////
//       $.ajax({
//
//             url:`https://rickandmortyapi.com/api/location`,
//             type: "GET",
//             data: {
//               $maxPerPageView: 10,
//
//             }
//
//           }).then(
//             (location) => {
//               console.log(location);
//
//           },(error) => {
//             console.log(`${error.statusText.toUpperCase()}:bad request`);
//
//           })
// ////////////////////////////////////////////////////////////////////////////////////
// // third ajax for episodes
// ////////////////////////////////////////////////////////////////////////////////////
//           $.ajax({
//
//                 url:`https://rickandmortyapi.com/api/episode`,
//                 type: "GET",
//                 data: {
//
//                 }
//
//               }).then(
//                 (episodes) => {
//                   console.log(episodes);
//
//               },(error) => {
//                 console.log(`${error.statusText.toUpperCase()}:bad request`);
//
//               })
//
//
//
//
//
//
//
//
//
//
// })



//////////////////////////////////////////
// api for all of rick and morty
/////////////////////////////////////////

//   $.ajax({
//
//     url:`https://rickandmortyapi.com/api/`,
//     type: "GET",
//     data: {
//       "characters": "https://rickandmortyapi.com/api/character",
//       "locations": "https://rickandmortyapi.com/api/location",
//       "episodes": "https://rickandmortyapi.com/api/episode"
//     }
//
//
//   }).then(
//     (data) => {
//       console.log(data);
//       console.log(data.characters);
//
//
//   },(error) => {
//     console.log(`${error.statusText.toUpperCase()}:bad request`);
//
//   }
// )
