function showStations() {
  $.ajax({method: "GET", url: "http://mtaapi.herokuapp.com/stations"}).done(function(data) {
    showResults(data);
  })
}

function showResults(data) {
  data.result.forEach((station) => {
    $('#data').html(`<p>ID: ${station.id}, Name: ${station.name}</p>`);
  })
}
