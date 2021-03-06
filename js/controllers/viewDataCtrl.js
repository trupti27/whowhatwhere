myApp.controller("viewDataCtrl", function ($scope, $http, $routeParams, $window) {
    $scope.fetchData = [];
    var markers = [],
        itemName = $routeParams.menuName,
        locations = itemName.split(','),
        city = locations[1],
        item = locations[0];

    $http({
        method: 'GET',
        url: '/search?location=' + city + '&term=' + item + ''
    }).then(function successCallback(response) {

        var data = response.data.businesses;

        for (var i = 0; i < data.length; i++) {
            $scope.fetchData.push(
                {
                    id: data[i].id,
                    name: data[i].name,
                    phone: data[i].phone,
                    city: data[i].location.city,
                    rating: data[i].rating,
                    address: data[i].location.display_address,
                    image: data[i].image_url,
                    rating: data[i].rating_img_url,
                    coords: data[i].location.coordinate,
                    url: data[i].url
                }
            )
        }

        loadGoogleMarkers();
    }, function errorCallback(response) {
    });

    function loadGoogleMarkers(){
        var locations = $scope.fetchData;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(-33.92, 151.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var InfoWindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            var coords = locations[i].coords;

            marker = new google.maps.Marker({
                id: locations[i].id,
                position: new google.maps.LatLng(coords.latitude, coords.longitude),
                map: map
            });

            markers.push(marker);

            bounds.extend(marker.position);

            google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                return function () {
                   /* InfoWindow.setContent(locations[i].name);*/
                   InfoWindow.setContent('<div class="map-item"><strong><span>'+(i+1)+'</span>. '+locations[i].name+'</strong>' +
                        '<br>'+'&#9990; '+locations[i].phone+'<br>'+locations[i].address+'<br>'+locations[i].city+'</div>');
                    InfoWindow.open(map, marker);
                }
            })(marker, i));
        }

        map.fitBounds(bounds);
    }
});
