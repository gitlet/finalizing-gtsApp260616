/**
 * Created by gl on 16/06/16.
 */
// alert('hi');



$(document).ready(function () {
    $('.header .left-menu-handle').bind('click', function () {
        $('.stable').toggleClass('toggling');
        // var effect = 'slide';
    });

    

    //mapstraction
    var map = new mxn.Mapstraction('map', 'openlayers');
    var latlon = new mxn.LatLonPoint(25.2048, 55.2708);

    map.setCenterAndZoom(latlon, 10);
});