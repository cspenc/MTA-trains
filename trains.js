function showAllStations() {
  $.ajax({method: "GET", url: "http://mtaapi.herokuapp.com/stations"}).done(function(data) {
    showResults(data);
  })
}

function hide() {
  $('#data').html('');
}

function showResults(data) {
  let final = `<a href="#" onClick="hide()">Hide</a>`;
  data.result.forEach((station) => {
    final += `<p>ID: ${station.id}, Name: ${station.name}</p>`
  })
  $('#data').html(final);
}
