$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var food = $("input#food").val();
    var people = $("input#people").val();
    var place = $("input#place").val();
    var hobby = $("input#hobby").val();
    var music = $("input#music").val();

    var favoritesArray = [food, people, place, hobby, music]


    $("#food-answer").text(favoritesArray[0]);
    $("#people-answer").text(favoritesArray[1]);
    $("#place-answer").text(favoritesArray[2]);
    $("#hobby-answer").text(favoritesArray[3]);
    $("#music-answer").text(favoritesArray[4]);
    
    $("#originalArray").text(favoritesArray);
    $("#results").show();
    $("#resutls2").show();
    event.preventDefault();
  });
});
