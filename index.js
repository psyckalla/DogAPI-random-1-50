'use strict'

function getDogImage() {
    const inputValue = $('#number').val();
    console.log(inputValue);
    fetch('https://dog.ceo/api/breeds/image/random/' + inputValue)
      .then(response => response.json())
      .then(responseJson => mapArray(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  };

function mapArray(responseJson) {
    
    for (let i = 0; i < responseJson.message.length; i++) {
       
        $('.results').append('<img class="results-img" src=" ' + responseJson.message[i] + ' ">');
        $('.results').removeClass('hidden');


    };

};



  function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
      getDogImage();
    });
  };


$(function() {
    watchForm();
});
