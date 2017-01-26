var baseApiUrl = '/indrz/api/v1/';
var baseApiRoutingUrl = '/indrz/api/v1/directions/';
var baseApiSearchUrl = baseApiUrl + 'search';
var baseUrlWms =  'http://gis-neu.wu.ac.at:8080/geoserver290/indrz/wms';
var zoom_level="{{ zoom_level }}";
var campus_id="{{ campus_id}}";
var floor = "{{ floor_num }}";
var building_id="{{ building_id }}";
var floor_id="{{ floor_id }}";
var floor_num = "{{ floor_num }}";
var space_id="{{ space_id }}";
var poi_id="{{ poi_id }}";
var poi_name="{{ poi_name }}";
var search_text="{{ search_text }}";
var active_floor_num="{{ floor_num }}";
var floor_layers = [];
var timer_waitfor_floor = null;
var building_info = null;
var map_name="{{map_name}}";
var route_from = "{{route_from}}";
var route_to = "{{route_to}}";
var centerx = "{{centerx}}";
var centery = "{{centery}}";
var tempStart = [];
var tempEnd = [];

// var share_xy = "{{ share_xy }}"  // an array like [1826602.52,6142514.22]
var share_xy = [1826602.52731,6142514.228525]
var StartCenterX = 1826602.5273166203;
var StartCenterY = 6142514.2285252055;
var CampusZoom = [StartCenterX, StartCenterY];


var building_id = 1;

var searchValues = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // prefetch: baseApiUrl + 'spaces/search/?format=json',
    prefetch: '/autocomplete/%QUERY?.format=json',
    remote: {
      url: '/autocomplete/%QUERY?.format=json',
      wildcard: '%QUERY'
    }
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#search-input').typeahead(null, {
    hint: true,
    highlight: true,
    minLength: 1,
    name: 'search-field',
    limit: 100,
    source: searchValues
    // templates: {
    //         empty: 'not found', //optional
    //         suggestion: function(el){return '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZsX_jcmMUqvVF3HW8-3dyjxZ9wZO4ugIvYQyj761-RYwcH91" />'+el.name}
    //     }


});

$('#search-input').on('typeahead:selected', function (e, item) {
    console.log("selected item: " + item);
    searchIndrz(building_id, item);

}).on('typeahead:autocompleted', function (e, item) {
    console.log("autocompleted item: " + item);
});


// $("#submitFormSearch").submit(function (event) {
//     //              alert( "Handler for .submit() called."  );
//
//     //            var buildingid = buildingNantesId;
//     var searchText = $('#search-input').val();
//     searchIndrz(building_id, searchText);
//     event.preventDefault();
// });

$("#showPoi").submit(function (event) {
   // alert( "Handler for .submit() called." + $('#poi-input').val()   );
    var poiName = $('#poi-input').val();
    searchPoi(building_id, poiName);
    event.preventDefault();
    });

       var roomNums = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: baseApiUrl + 'spaces/search/?format=json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch-start-location .typeahead').typeahead(null, {
    hint: true,
    highlight: true,
    minLength: 1,
    name: 'route-from-field',
    limit: 100,
    source: searchValues
});

$('#prefetch-end-location .typeahead').typeahead(null, {
    hint: true,
    highlight: true,
    minLength: 1,
    name: 'route-to-field',
    limit: 100,
    source: searchValues
});


$('#prefetch-start-location').on('typeahead:change', function (e, item) {
    console.log("CHANGE item: " + item);
    get_start(item);


    }).on('typeahead:autocomplete', function (e, item) {
        console.log("autocompleted START item: " + item);
    });

$('#prefetch-end-location').on('typeahead:change', function (e, item) {
    console.log("CHANGE END item: " + item);
       get_end(item);

    }).on('typeahead:autocomplete', function (e, item) {
        console.log("autocompleted END item: " + item);
    });



$("#directionsForm").submit(function (event) {
    // alert( "Handler for .submit() called."  );
    var startSearchText = $('#route-from').val();
    var endSearchText = $('#route-to').val();
     var routeType = $("input:radio[name=typeRoute]:checked").val();

    // addRoute(startSearchText, endSearchText, routeType);

    getDirections2(startSearchText, endSearchText, routeType);
    event.preventDefault();
});



function zoomToCampus(){
    var pan = ol.animation.pan({
      duration: 2000,
      source: /** @type {ol.Coordinate} */ (view.getCenter())
    });
    map.beforeRender(pan);
    view.setCenter(CampusZoom);
    view.setZoom(17);
}

$("#id-zoom-to-campus-left").on("click", function(evt){
    zoomToCampus();


});


$("#id-zoom-to-campus-map").on("click", function(evt){

 zoomToCampus();

});

