
$(document).ready(function(){


var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     
planets.reverse();

planets.forEach(function(value){
  $('#planet').append($('<option></option>').text(value[0]).val(value[1]));
});

$('#button').click(function(){
  var aweight = $("#weight").val();
  var aplanet = $("select option:selected").text();
  var gravity = $("select option:selected").val();
  var result = aweight * gravity;
  
  $("#result").text ("If you are on " + aplanet + ", you would weigh " + Math.round(result) + " lbs!");
});
});