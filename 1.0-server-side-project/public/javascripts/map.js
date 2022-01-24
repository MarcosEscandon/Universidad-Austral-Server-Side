var mymap = L.map('main_map').setView([40.31097171402792, -3.731484162126506], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

}).addTo(mymap);

/*
L.marker([40.304639157222, -3.728952156280964]).addTo(mymap);
L.marker([40.31007177441281, -3.72873757957379]).addTo(mymap);
L.marker([40.319849753188144, -3.7180394930127854]).addTo(mymap);
*/

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion,{title: bici.id}).addTo(mymap);
        });
    }
})