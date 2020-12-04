$(() => {


  $('#firstForm').on('click', (event) => {
    event.preventDefault()
    const userInput = $('input').val()
  })
  ////////////////////////////////////////////////////////////////////////////////////
//Variables to be called later time but be global at the same time
  ////////////////////////////////////////////////////////////////////////////////////
  const $ricksanchez = $('.rickSanchez')
  const $characters = $('#nameRickSanchez')
  const $charactersLi = $("#testingLi")
  const $charactersLi2 = $('#testingLi2')
  const $characters2 = $('#testing2')
  const $imagesTest = $('#images')
  const $locationdiv = $('.locationDiv')
  const $location = $('#location')
////////////////////////////////////////////////////////////////////////////////////
// first ajax for characters
////////////////////////////////////////////////////////////////////////////////////
$.ajax({

      url:`https://rickandmortyapi.com/api/character/`,
      // ${$(event.target).val()}
      type: "GET",
      data: {
        $limit: 2,
      }

    }).then(
      (characters) => {
        // for(let i = 0; i < ; i++){
          $characters.append($characters).text(characters.results[0].name)
          $characters2.append($charactersLi2).text(characters.results[0].gender)
          $locationdiv.append($location).text(characters.results[0].location.name)
          const $species = $('<div>').text(characters.results[0].species)
          $ricksanchez.append($species)
          const $status = $('<div>').text(characters.results[0].status)
          $ricksanchez.append($status)
          $imagesTest.append(`<img src = ${characters.results[0].image} alt='image'/>`)


          console.log(characters);
        // }


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

//////////////////////////////////////////////////////////////////////////////////
//boneyard for old code i dont want to mess up just incase
//////////////////////////////////////////////////////////////////////////////////

// $.ajax({
//
//       url:`https://rickandmortyapi.com/api/character/`,
//       // ${$(event.target).val()}
//       type: "GET",
//       data: {
//         $limit: 10,
//       }
//
//     }).then(
//       (characters) => {
//         let characterTest = []
//         characterTest.push(characters.results[0].name)
//         characterTest.push(characters.results[1].name)
//
//         for(let i = 0; i < 1; i++){
//           $characters.append(characterTest)
//         // console.log(characters.results[0].name);
//
//
//           console.log(characters);
//         }
//
//
//     },(error) => {
//       console.log(`${error.statusText.toUpperCase()}:bad request`);
//
//     })
//   })
