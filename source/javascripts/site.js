var slideIndex = []; // This will be automatically populated
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]; // don't forget this!
initialiseSlides();
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2); // Note that this is set to 1 now
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);


// Initalise all starting slide indexes
function initialiseSlides(){
   for (var i = 0; i < slideId.length; i++){
      slideIndex[i] = 1;
   }
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block"; 
}