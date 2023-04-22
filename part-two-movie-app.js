//'Click' Event Listener for Input Submit Button
$('#form-submit-button').on('click', (event) => {
  //Prevent Page from Refreshing When Submit Button Clicked.
  event.preventDefault();
  //Create Variables for Movie Container, Move Title, Movie Rating, and Delete Button.
  let $movieTitle = $('#movie-title-input').addClass('movieTitle');
  let $movieRating = $('#movie-rating-input').addClass('movieRating');
  let $movieDeleteButton = $('<input type="Submit" value="Delete">').addClass('movieDeleteButton');
  let $movieContainer = $('<div></div>').addClass('movieContainer');
  //Appends Movie Title, Movie Rating, and Delete Button to Movie and Ratings Container.
  $movieContainer.append($movieTitle.val());
  $movieContainer.append($movieRating.val());
  $movieContainer.append($movieDeleteButton);
  $('#movie-and-rating').append($movieContainer);
  
  //'Click' Event Listener for Delete Button. Removes 
  $($movieDeleteButton).on('click', (event) => {
    $movieContainer.remove();
    console.log("I've been clicked");
  });

});

