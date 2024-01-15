 const L = fetch("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
 var map = L.map('leaflet-map').setView([latitude, longitude], 13);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

 var ctx = document.getElementById('covid-chart').getContext('2d');
 var covidChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
         datasets: [{
             label: 'Cas de Covid',
             data: [100, 150, 120, 200],
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 2,
             fill: false
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
});


 function fetchTraffic() {
    let trafficSection = document.getElementById("traffic-section")
    const response = fetch("https://www.datagrandest.fr/data4citizen/d4c/api/datasets/2.0/search/q=traffic&rows=2&start=2&facet.mincount=2&facet.limit=2");
    const traffic =  response.json();
    console.log(traffic)
    trafficSection.innerHTML(traffic)
  }
  

