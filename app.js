$(() => {

////////////////////////////////////////////////////////////////////////////////////
//on click event for searching names in the url
////////////////////////////////////////////////////////////////////////////////////
const formTest =
  $('form').on('submit', (event) => {
    event.preventDefault()
    const userInput = $('input').val()
    console.log(userInput)
    $('.rickSanchez').empty()
////////////////////////////////////////////////////////////////////////////////////
//main div where everything is inside of
////////////////////////////////////////////////////////////////////////////////////
      const $ricksanchez = $('.rickSanchez')

    $.ajax({
          ////////////////////////////////////////////////////////////////////////////////////
          //url for api
          ////////////////////////////////////////////////////////////////////////////////////
          url:`https://rickandmortyapi.com/api/character/?name=`+userInput+``,
          // wow user input worked that easily let me try names now
          //got hint from this link https://stackoverflow.com/questions/14048939/how-to-add-a-variable-to-url-of-ajax-url/14048981
          type: "GET",


        }).then(
          (characters) => {// my data

            for(let i = 0; i < characters.results.length; i++){
              const $idNames = 'test'+[i]
              // will let the divs change with everyone going in order so now i have to make 20 divs 0-19 and go in order so that they can go in a card formation everytime
              const $testDiv = $('<div>').attr('id', `${$idNames}`)
              $ricksanchez.append($testDiv)
              // const $testP = $('p')// wasnt targeting all 20 characters for some reason might have to take out if i cant fix it// maybe changing this to 'test'+[i] also and then adding classes to this specifically

              ////////////////////////////////////////////////////
              const $imagesTest = $(`<img src = ${characters.results[i].image} alt='image'/>`)
              $testDiv.append($imagesTest)
              $imagesTest.addClass(`img${$idNames}`)
              ////////////////////////////////////////////////////////////////////////////////////
              //names for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $characters = $('<p>').text("Name: " + characters.results[i].name)
              $testDiv.append($characters)
              $characters.addClass(`p${$idNames}`)
              ///////////////////////////////////////////////////////////////////////////////////
              //genders for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $gender = $('<p>').text("Gender: " + characters.results[i].gender)
              $testDiv.append($gender)
              $gender.addClass(`p${$idNames}`)
              ///////////////////////////////////////////////////////////////////////////////////
              //locations for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $location = $('<p>').text("Location: " + characters.results[i].location.name)
              $testDiv.append($location)
              $location.addClass(`p${$idNames}`)
              ///////////////////////////////////////////////////////////////////////////////////
              //species for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $species = $('<p>').text("Species: " + characters.results[i].species)
              $testDiv.append($species)
              $species.addClass(`p${$idNames}`)
              ///////////////////////////////////////////////////////////////////////////////////
              //status for everyone displaying
              ///////////////////////////////////////////////////////////////////////////////////
              const $status = $('<p>').text("Status: " + characters.results[i].status)
              $testDiv.append($status)
              $status.addClass(`p${$idNames}`)


              ///////////////////////////////////////////////////////////////////////////////////
              //clickable events
              ///////////////////////////////////////////////////////////////////////////////////

              // const $openRicky = (event) => {
              //   $testP.css('display', 'block')
              // }
              // $ricksanchez.on('click', $openRicky)// trying to make modal is not working as of now
              // const $closeRicky = (event) => {
              //   $testP.css('display', 'none')
              //
              // }
              // $ricksanchez.on('dblclick', $closeRicky)
              // console.log($testP);

              ///////////////////////////////////////////////////////////////////////////////////
              //fixed above stuff with this
              ///////////////////////////////////////////////////////////////////////////////////
              $($imagesTest).hover( (event) => {
                $characters.toggle()
                $gender.toggle()
                $location.toggle()
                $species.toggle()
                $status.toggle()

              })

              $($imagesTest).hover( (event) => {
                $characters.addClass('animation')
                $characters.addClass('audio')
                $gender.addClass('animation')
                $location.addClass('animation')
                $species.addClass('animation')
                $status.addClass('animation')
              })
              $($imagesTest).hover( (event) => {
                $imagesTest.toggleClass('imageAnimation')
              })
            }



        },(error) => {
          alert('your not that good at spelling huh please try again ')
          // when you get an error because of a misspelled name it will populate an alert instead of nothing
          console.log(`${error.statusText.toUpperCase()}:bad request`);
          // will log the error

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
