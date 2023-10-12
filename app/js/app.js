MicroModal.init ({
	openTrigger: "data-micromodal-open"
})

// Set the date we're counting down to
var countDownDate = new Date("October 1, 2022 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("day").innerHTML = days + "<br><span class='just-text'>Дней</span>";
  
  document.getElementById("hour").innerHTML = hours + "<br><span class='just-text'>Часов</span>";
  
  document.getElementById("min").innerHTML = minutes + "<br><span class='just-text'>Минут</span>";
  
  document.getElementById("sec").innerHTML = seconds + "<br><span class='just-text'>Секунд</span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Конец времени";
  }
}, 1000);