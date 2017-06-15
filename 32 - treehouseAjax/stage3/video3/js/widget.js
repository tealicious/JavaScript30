$(document).ready(function(){
  var employeeUrl = './data/employees.json';
  var roomUrl = './data/rooms.json';
  $.getJSON(employeeUrl, function(response){
    // getJSON is a hybrid jquery method that 'GET's a json file then essentially runs JSON.parse() for you. 'response now contains an array of objects with our employees and their office statuses
    console.table(response);
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(i, employee){
      console.log(i, employee.name);
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">'
      } else {
        statusHTML += '<li class="out">'
      }
      statusHTML += employee.name;
    }); //end for loop
    statusHTML += "</ul>";
    $('#employeeList').html(statusHTML);
  }); //end ajax call

  $.getJSON(roomUrl, function(response){
    console.table(response);
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(i, room){
      console.log(i, room.number);
      if (room.open === true) {
        statusHTML += '<li class="empty">'
      } else {
        statusHTML += '<li class="full">'
      }
      statusHTML += room.number;
    }); //end for loop
    statusHTML += "</ul>";
    $('#roomList').html(statusHTML);
  }); //end ajax call
}); //end ready
