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
                $gender.addClass('animation')
                $location.addClass('animation')
                $species.addClass('animation')
                $status.addClass('animation')
              })
              // const open = $($imagesTest)
              // const modal_container = $('.ptest0')
              // const close = $('close')
              //
              // open.on('click', () => {
              //   $characters.addClass('show')
              //     $gender.addClass('show')
              //     $location.addClass('show')
              //     $species.addClass('show')
              //     $status.addClass('show')
              //
              // })


            }



        },(error) => {
          alert('your not that good at spelling huh please try again ')
          // when you get an error because of a misspelled name it will populate an alert instead of nothing
          console.log(`${error.statusText.toUpperCase()}:bad request`);
          // will log the error

        })
      })
  })
