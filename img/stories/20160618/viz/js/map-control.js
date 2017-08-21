window.onload = function() {
    var vizjson = 'https://adi45.cartodb.com/api/v2/viz/a961a80c-23e9-11e6-9ed3-0e8c56e2ffdb/viz.json';

    // Choose center and zoom level
    var options = {
        center: [-25.749306, 28.202061], // South Africa
        zoom: 10.5,
        scrollWheelZoom: false
    }

    // Instantiate map on specified DOM element
    var map_object = new L.Map('map', options);

    // Add a basemap to the map object just created
   /* L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: 'CartoDB'
    }).addTo(map_object);*/

    // Add CartoDB data layers
    cartodb.createLayer(map_object,vizjson)
        .addTo(map_object);

    //btn - metro switch

    // Default
    $("#pt").removeClass("hidden").show();

    // Joburg
    $(".btnJoburg").on('click', function() {
    map_object.setView([-26.204110, 28.038298],10);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    // show info
    $("#jb").removeClass("hidden").show();
    ga('send', 'event', 'clicked', 'joburg');
    });

    // Cape Town
    $(".btnCapeTown").on('click', function() {
    map_object.setView([-34.021784, 18.502420],10);
    // hide info
    $("#jb").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    // show info
    $("#ct").removeClass("hidden").show();
    ga('send', 'event', 'clicked', 'cape town');
    });

    //Durban
     $(".btnDurban").on('click', function() {
    map_object.setView([-29.864142, 30.975534],10);
        // hide info
    $("#jb").addClass("hidden").hide();
    $("#ct").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    // show info
    $("#dbn").removeClass("hidden").show();
    ga('send', 'event', 'clicked', 'durban');
    });

    //EL
     $(".btnEastLondon").on('click', function() {
    map_object.setView([-32.995302, 27.862297],11.3);
    // hide info
    $("#jb").addClass("hidden").hide();
    $("#ct").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    // show info
    $("#el").removeClass("hidden").show();
    ga('send', 'event', 'clicked', 'east london');
    });

    // Pretoria
    $(".btnPretoria").on('click', function() {
    map_object.setView([-25.749306, 28.202061],10);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    // show info
    $("#pt").removeClass("hidden").show();
    ga('send', 'event', 'clicked', 'pretoria');
    });
}
