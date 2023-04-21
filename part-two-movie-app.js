//'Click' Event Listener for Input Submit Button
$('#form-submit-button').on('click', (event) => {
  //Prevent Page from Refreshing When Submit Button Clicked.
  event.preventDefault();
  //Create Variables for Movie Container, Move Title, Movie Rating, and Delete Button.
  let $movieTitle = $('#movie-title-input').val();
  let $movieRating = $('#movie-rating-input').val();
  let $movieDeleteButton = $('<input type="Submit" value="Delete">');
  let $movieContainer = $('<div></div>').addClass('movieContainer');
  //Appends Movie Title, Movie Rating, and Delete Button to Movie and Ratings Container.
  $movieContainer.append($movieTitle);
  $movieContainer.append($movieRating);
  $movieContainer.append($movieDeleteButton);
  $('#movies-and-ratings').append($movieContainer);
  
  //'Click' Event Listener for Delete Button. Removes 
  $($movieDeleteButton).on('click', (event) => {
    $movieContainer.remove();
    console.log("I've been clicked");
  });

});

