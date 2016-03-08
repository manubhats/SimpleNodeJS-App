var app=angular.module('myApp',[]);

app.controller("AppCtrl1",function($scope,$http)
{
	console.log("controller received the message");

	$scope.update=function() 
	{

		$http.get("/cityList").success(function(response)
		{
		  	var cities=[];
		 	$scope.cities=response;
		 	console.log(response);	
	 	});
	 	

	}

});
	
	