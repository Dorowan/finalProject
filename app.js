$(document).ready(function(){
  document.getElementById("move").innerHTML = "<p> Please fill in the blanks and click that beautiful button below: </p>"
$("#calctime").click(function(e){

  e.preventDefault();

  var leavinglocale = $("#departcity").val();
  var showuplocale = $("#arrivalcity").val();

    console.log(leavinglocale)
    console.log(showuplocale)
})

  //fetch('')
  //     .then(function() {
  //       return response.json();
  // })
  // .then(function(data){
  //   console.log(data)
  //
  // })
  })
