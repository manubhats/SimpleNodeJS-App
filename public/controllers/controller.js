var app=angular.module('myApp',[]);

//var data=[];
//AngularJS controller
app.controller("AppCtrl1",function($scope,$http)
{
	$scope.update=function() 
	{
		$http.get("/cityList").success(function(response)
		{
		  	//var cities=[];
		 	$scope.cities=response;
	 	});
	}
	
	$scope.visualize=function() 
	{		
	 	initMap();	
    }	 	
});

//Google Map creation
function initMap() 
{  			
  		var myLatLng1 = {lat:32.802955, lng: -96.769923};
  		var myLatLng2 = {lat:29.4241219,lng: -98.493628199};
  		var myLatLng3 = {lat:33.4483771, lng: -112.0740373};
  		var myLatLng4 = {lat:29.7601927, lng: -95.36938959};
  		var myLatLng5 = {lat:32.7153292, lng: -117.1572551};

  		var map = new google.maps.Map(document.getElementById('map'), 
  		{
    		zoom: 5,
    		center: myLatLng1
  		});

  		var marker = new google.maps.Marker(
  		{
    		position: myLatLng1,
    		map: map,
    		title: ''
  		});
  		var marker = new google.maps.Marker(
  		{
    		position: myLatLng2,
    		map: map,
    		title: ''
  		});	

  		var marker = new google.maps.Marker(
  		{
    		position: myLatLng3,
    		map: map,
    		title: ''
  		});	

  		var marker = new google.maps.Marker(
  		{
    		position: myLatLng4,
    		map: map,
    		title: ''
  		});	
  		var marker = new google.maps.Marker(
  		{
    		position: myLatLng5,
    		map: map,
    		title: ''
  		});	
}

