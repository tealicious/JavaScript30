var employeeXhr = new XMLHttpRequest();
employeeXhr.onreadystatechange = function() {
  if(employeeXhr.readyState === 4) {
    var employees = JSON.parse(employeeXhr.response);
    console.log(typeof employeeXhr.response,", ", typeof employees, employees);
    console.table(employees);
    var listContainer = document.querySelector('#employeeList');
    var list = "<ul class='bulleted'>";
    //build out list seperately in order to prevent tags from self closing
    for (i = 0; i < employees.length; i++) {
      if(employees[i].inoffice == true){
        list+= "<li class='in'>";
      } else {
        list+= "<li class='out'>";
      }
      list += employees[i].name + "</li>";
    }
    list += "</ul>";
    listContainer.innerHTML += list;
  }
};
employeeXhr.open('GET', 'data/employees.json');
employeeXhr.send();


var roomXhr = new XMLHttpRequest();
roomXhr.onreadystatechange = function() {
  if(roomXhr.readyState === 4) {
    var rooms = JSON.parse(roomXhr.response);
    console.log(typeof roomXhr.response,", ", typeof rooms, rooms);
    console.table(rooms);

    var listContainer = document.querySelector("#roomList");
    var list = "<ul class='bulleted'>";

    for (i = 0; i < rooms.length; i++) {
      if(rooms[i].open == true){
        list += "<li class='empty'>"
      } else {
        list += "<li class='full'>"
      }
      list += rooms[i].number + "</li>";
    }
    list += "</ul>"
    listContainer.innerHTML += list;
  }
}
roomXhr.open('GET', 'data/rooms.json');
roomXhr.send();
