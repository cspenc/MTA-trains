function showAllStations() {
  $.ajax({method: "GET", url: "http://mtaapi.herokuapp.com/stations"}).done(function(data) {
    showResults(data);
  })
}

function showResults(data) {
  let final = '';
  data.result.forEach((station) => {
    final += `<p>ID: ${station.id}, Name: ${station.name}</p>`
  })
  $('#data').html(final);
}
