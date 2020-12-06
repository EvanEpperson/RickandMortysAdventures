$(() => {

const formTest =
  $('form').on('submit', (event) => {
    event.preventDefault()
    const userInput = $('input').val()
    console.log(userInput);
    $(userInput).empty()

      const $ricksanchez = $('.rickSanchez')

    $.ajax({

          url:`https://rickandmortyapi.com/api/character/?name=`+userInput+`&status=alive`,
          // wow user input worked that easily let me try names now 
          //got hint from this link https://stackoverflow.com/questions/14048939/how-to-add-a-variable-to-url-of-ajax-url/14048981
          type: "GET",
          data: {
            $limit: userInput, 
          }

        }).then(
          (characters) => {

            for(let i = 0; i < characters.results.length; i++){
              ////////////////////////////////////////////////////////////////////////////////////
              //names for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $characters = $('<div>').text("Name: " + characters.results[i].name)
              $ricksanchez.append($characters)
              $characters.attr('id', 'character')
              ///////////////////////////////////////////////////////////////////////////////////
              //genders for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $gender = $('<div>').text("Gender: " + characters.results[i].gender)
              $ricksanchez.append($gender)
              $gender.attr('id', 'gender')
              ///////////////////////////////////////////////////////////////////////////////////
              //locations for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $location = $('<div>').text("Location: " + characters.results[i].location.name)
              $ricksanchez.append($location)
              $location.attr('id', 'locations')
              ///////////////////////////////////////////////////////////////////////////////////
              //species for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $species = $('<div>').text("Species: " + characters.results[i].species)
              $ricksanchez.append($species)
              $species.attr('id', 'species')
              ///////////////////////////////////////////////////////////////////////////////////
              //status for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $status = $('<div>').text("Status: " + characters.results[i].status)
              $ricksanchez.append($status)
              $status.attr('id', 'status')
              ///////////////////////////////////////////////////////////////////////////////////
              //imagines for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $imagesTest = $(`<img src = ${characters.results[i].image} alt='image'/>`)
              $ricksanchez.append($imagesTest)
              $imagesTest.attr('id', 'images')



              // console.log(characters);
            }


        },(error) => {
          console.log(`${error.statusText.toUpperCase()}:bad request`);

        })
      })
  })
  ////////////////////////////////////////////////////////////////////////////////////
//Variables to be called later time but be global at the same time
  ////////////////////////////////////////////////////////////////////////////////////
  // const $ricksanchez = $('.rickSanchez')
////////////////////////////////////////////////////////////////////////////////////
// first ajax for characters
////////////////////////////////////////////////////////////////////////////////////
// $.ajax({
//
//       url:`https://rickandmortyapi.com/api/character/?page=${$(event.target).val()}`,
//       // ${$(event.target).val()}
//       type: "GET",
//       data: {
//         $limit: 2,
//       }
//
//     }).then(
//       (characters) => {
//
//         for(let i = 0; i < characters.results.length; i++){
//           ////////////////////////////////////////////////////////////////////////////////////
//           //names for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $characters = $('<div>').text("Name: " + characters.results[i].name)
//           $ricksanchez.append($characters)
//           $characters.attr('id', 'character')
//           ///////////////////////////////////////////////////////////////////////////////////
//           //genders for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $gender = $('<div>').text("Gender: " + characters.results[i].gender)
//           $ricksanchez.append($gender)
//           $gender.attr('id', 'gender')
//           ///////////////////////////////////////////////////////////////////////////////////
//           //locations for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $location = $('<div>').text("Location: " + characters.results[i].location.name)
//           $ricksanchez.append($location)
//           $location.attr('id', 'locations')
//           ///////////////////////////////////////////////////////////////////////////////////
//           //species for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $species = $('<div>').text("Species: " + characters.results[i].species)
//           $ricksanchez.append($species)
//           $species.attr('id', 'species')
//           ///////////////////////////////////////////////////////////////////////////////////
//           //status for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $status = $('<div>').text("Status: " + characters.results[i].status)
//           $ricksanchez.append($status)
//           $status.attr('id', 'status')
//           ///////////////////////////////////////////////////////////////////////////////////
//           //imagines for everyone displaying
//           ///////////////////////////////////////////////////////////////////////////////////
//           const $imagesTest = $(`<img src = ${characters.results[i].image} alt='image'/>`)
//           $ricksanchez.append($imagesTest)
//           $imagesTest.attr('id', 'images')
//
//
//
//           // console.log(characters);
//         }
//
//
//     },(error) => {
//       console.log(`${error.statusText.toUpperCase()}:bad request`);
//
//     })
//   })

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
// })
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




//array into a string but it pulls too much info
// var string = JSON.stringify(keyTest)//making the array a string
// console.log(string);
// $ricksanchez.append(string)


// makes one card done except css

// $characters.append($characters).text(characters.results[0].name)
// $characters2.append($charactersLi2).text(characters.results[0].gender)
// $locationdiv.append($location).text(characters.results[0].location.name)
// const $species = $('<div>').text(characters.results[0].species)
// $ricksanchez.append($species)
// const $status = $('<div>').text(characters.results[0].status)
// $ricksanchez.append($status)
// const $imagesTest = $(`<img src = ${characters.results[0].image} alt='image'/>`)
// $ricksanchez.append($imagesTest)



        // let keys = []
        // keys = Object.keys(characters.results[i])
        // console.log(characters.results[0][keys[1]]);
        // $ricksanchez.append(characters.results[0][keys[1]])
        // // keys.forEach(element => console.log(element));



// works but will only give human and status
// for(let i = 0; i < characters.results.length; i++){
  // $characters.append($characters).text(characters.results[i].name)
  // $characters2.append($charactersLi2).text(characters.results[i].gender)
  // $locationdiv.append($location).text(characters.results[i].location.name)
  // const $species = $('<div>').text(characters.results[i].species)
  // $ricksanchez.append($species)
  // const $status = $('<div>').text(characters.results[i].status)
  // $ricksanchez.append($status)
  // const $imagesTest = $(`<img src = ${characters.results[i].image} alt='image'/>`)
  // $ricksanchez.append($imagesTest)
 