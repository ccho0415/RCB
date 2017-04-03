/* MongoDB Zoo Site (18.2.4)
 * Front-End
 * ========================= */


/* TODO:

  1. Make an AJAX function for loading the table in index.html with the data from your animals collection in MongoDB.
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!
*/
$("#weightsort").on("click", weight)
$("#")
$.getJSON("/all", function(data) {
  // For each entry of that json...
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    // Append each of the animal's properties to the table
    $("#results").append("<tr><td>" + data[i].name + "</td>" +
                         "<td>" + data[i].numlegs + "</td>" +
                         "<td>" + data[i].class + "</td>" +
                         "<td>" + data[i].weight + "</td>" +
                         "<td>" + data[i].whatIwouldReallyCallIt + "</td></tr>");
  }
});

      function weight() {
        var table = $("#results")
        table.empty();
        table.append("<tr><th>Name</th><th>Num Legs</th><th>Class</th><th>Weight</th><th>But I'd Call It...</th></tr>")
        for (var i = 0; i < data.length; i++) {
          var name = data[i].name;
          var legs = data[i].numlegs;
          var cls = data[i].class;
          var weight = data[i].weight;
          var common = data[i].whatIwouldReallyCallIt;
          table.append("<tr> <td>"+name+"</td><td>"+legs+"</td><td>"+cls+"</td><td>"+weight+"</td><td>"+common+"</td>")
        }
      }
      function name() {
        var table = $("#results")
        table.empty();
        table.append("<tr><th>Name</th><th>Num Legs</th><th>Class</th><th>Weight</th><th>But I'd Call It...</th></tr>")
        $.get("/name", function(data) {
          var table = $("#results")
        for (var i = 0; i < data.length; i++) {
          var name = data[i].name;
          var legs = data[i].numlegs;
          var cls = data[i].class;
          var weight = data[i].weight;
          var common = data[i].whatIwouldReallyCallIt;
          table.append("<tr> <td>"+name+"</td><td>"+legs+"</td><td>"+cls+"</td><td>"+weight+"</td><td>"+common+"</td>")
        }

      }