angular.module('myApp', []).
	controller('myController', ['$scope', '$http', 
		function($scope, $http) 
		{
			$http.get('/user/profile').success(function(data, status, headers, config) 
			{
				$scope.user = data;
				$scope.welcomeMessage;
				
				if(data.hero.name === "")
				{
					$scope.welcomeMessage = "Welcome.  Please update your Super Hero name."
				}
				else
				{
					$scope.welcomeMessage = "Welcome " + data.hero.name;
				}
				
			
				$scope.error = "";
			}).
			error(function(data, status, headers, config)
			{
				$scope.user = {};
				$scope.error = data;
			});
		}
	]);