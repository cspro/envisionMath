var clusterWheel = clusterWheel || (clusterWheel = {});

clusterWheel.App = angular.module('clusterWheel.App', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
						.when('/', {
							templateUrl: 'partials/main.tpl.html',
							controller: 'clusterWheel.MainCtrl',
							reloadOnSearch: false
						})
						// .when('/inputForm', {
							// templateUrl: 'partials/form.tpl.html',
							// controller: 'clusterWheel.FormCtrl',
							// reloadOnSearch: false
						// })
						.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode(true);
	}]);
	
	
	angular.module('clusterWheel.App').directive('testDirective', function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				console.log("Here is a directive!");
			}
		};
	});
	
	
	
clusterWheel.MainCtrl = function($scope, $http, $location, $dialog, $rootScope, $sce, $timeout) {

	$http.get('data/cluster_data.json')
		.success(function(result) {
			$scope.clusters = result;
			$scope.topics = [];
			$scope.lessons = [];
			angular.forEach(result, function(cluster) {
				cluster.value = cluster.topics.length;
				cluster.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			});
		}).error(function(result) {
			alert("Error getting project data. " + result);
		});

	$scope.getLocation = function() {
		$scope.currBU = ($location.search()).businessUnit;
	};
	
	var init = function() {
		$scope.getLocation();
		$scope.hideCircleMask = ($scope.currBU == undefined);
	};
	
	init();
	
	$scope.deselectAllProjects = function() {
		angular.forEach($scope.projectData, function(value, key) {
			value.selectionState = "";
		});
	};
	
	$scope.reset = function($event) {
		if ($event) {
			$event.preventDefault();
		}	
		$location.search("");
		init();
	};
	
	$scope.onProjectClick = function($event, id) {
		$event.preventDefault();
		$scope.openDialog();
	};
	
	
	$scope.dialogOpts = {
		backdrop: true,
		backdropFade: true,
		backdropClick: true,
		dialogFade: false,
		keyboard: true,
		templateUrl: "partials/project.tpl.html",
		controller: 'clusterWheel.ProjectDialogController'
	};

	$scope.openDialog = function(){
		var d = $dialog.dialog($scope.dialogOpts);
		d.open();
	};
	
	var stageSize = 500;

	$scope.circleConfig = {
		innerRadius : stageSize * 0.15,                                              
		clustersRadius : stageSize * 0.35,                                             
		topicsRadius : stageSize * 0.45,                                             
		lessonsRadius : stageSize * 0.5,                                              
		radialSpacing : 2, // degrees of padding between clusters
		concentricSpacing: stageSize * 0.01 // space between circles (radial pixels)
	};
	
	var initKinetic = function() {
		$scope.stage = new Kinetic.Stage({
			container: 'kinetic',
			width: stageSize,
			height: stageSize
		});

	};

	var initCircles = function() {

		var totalTopics = 0;
		var totalClusters = $scope.clusters.length;
		for (var i=0; i < totalClusters; i++) {
			var cluster = $scope.clusters[i];
			var topics = cluster.topics;
			totalTopics += topics.length;
			for (var j=0; j<topics.length; j++) {
				var topic = topics[j];
				topic.cluster = cluster; // link back to parent
				var lessons = topic.lessons;
				for (var k=0; k<lessons.length; k++) {
					var lesson = lessons[k];
					lesson.topic = topic;
					lesson.cluster = cluster;
				}
			}
		}
		// $scope.circleConfig.radialSpacing = $scope.circleConfig.radialSpacing + $scope.circleConfig.radialSpacing/totalTopics;
		$scope.circleConfig.topicAngleSize = (360 - ((totalClusters) * $scope.circleConfig.radialSpacing)) / totalTopics;
		$scope.circleConfig.interTopicSpacing = ((totalTopics - totalClusters) * $scope.circleConfig.radialSpacing) / totalTopics;
		var clustersLayer = drawClusters($scope.circleConfig);
		$scope.stage.add(clustersLayer);
		clustersLayer.draw();
	};
	
	var drawClusters = function(config) {
		var layer = new Kinetic.Layer({
			x: stageSize * 0.5,
			y: stageSize * 0.5
		});
		var startAngle = -90 + config.radialSpacing;
		for (var i=0; i < $scope.clusters.length; i++) {
			var cluster = $scope.clusters[i];
			var angleSize = cluster.topics.length * config.topicAngleSize;
			var arc = createArc(config.innerRadius, config.clustersRadius, startAngle, angleSize, cluster.color);
			arc.on('mouseover', function(){
					this.opacity(0.5);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(1);
					this.parent.drawScene();
				});
			cluster.layer = layer;
			cluster.shape = arc;
			layer.add(arc);
			drawTopics(config, cluster, startAngle);
			startAngle += angleSize + config.radialSpacing;
		}
		return layer;
	};
	
	var drawTopics = function(config, cluster, startAngle) {
		var topics = cluster.topics;
		var layer = cluster.layer;
		for (var i=0; i < topics.length; i++) {
			var topic = topics[i];
			topic.realAngleSize = config.topicAngleSize;
			if (topics.length > 1) {
				topic.realAngleSize -= config.interTopicSpacing;
			}
			if (topics.length == 2) {
				if (i == 1) {
					startAngle += config.interTopicSpacing/2;
				}
			} else if (topics.length > 2) {
				if (i > 0) {
					startAngle += config.interTopicSpacing/2;
				}
			}
			// correct for rounding error
			if (i > 0) {
				switch (topics.length) {
					case 2:
							startAngle += 0.45;
							break; 
					case 4:
					case 5:
					case 6:
					case 7:
							startAngle -= 0.45;
							break; 
				}
			}
			var arc = createArc(config.clustersRadius + config.concentricSpacing, config.topicsRadius, startAngle, topic.realAngleSize, topic.cluster.color);
			arc.on('mouseover', function(){
					this.opacity(0.5);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(1);
					this.parent.drawScene();
				});
			topic.startAngle = startAngle;
			topic.layer = layer;
			topic.shape = arc;
			layer.add(arc);
			drawLessons(config, topic, startAngle);
			startAngle += config.topicAngleSize;
		}
	};
	
	var drawLessons = function(config, topic, startAngle) {
		var lessons = topic.lessons;
		var layer = topic.layer;
		var lessonSpacing = config.radialSpacing / 4;
		var angleInterval = (topic.realAngleSize/lessons.length);
		var realAngleSize = angleInterval - ((lessons.length-1) * lessonSpacing)/lessons.length;
		for (var i=0; i < lessons.length; i++) {
			var lesson = lessons[i];
			var arc = createArc(config.topicsRadius + config.concentricSpacing, config.lessonsRadius, startAngle, realAngleSize, topic.cluster.color);
			arc.on('mouseover', function(){
					this.opacity(0.5);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(1);
					this.parent.drawScene();
				});
			lesson.startAngle = startAngle;
			lesson.layer = layer;
			lesson.shape = arc;
			layer.add(arc);
			startAngle += angleInterval;
		}
	};
	
	
	var createArc = function(inner, outer, startAngle, angleSize, color) {
		return new Kinetic.Arc({
		  innerRadius: inner,
		  outerRadius: outer,
		  rotation: startAngle,
		  angle: angleSize,
		  fill: color,
		  stroke: '',
		  strokeWidth: 0,
		});
	};
	
	/*
	 * Called after timeout so browser has a chance to render before impress is run
	 */
	$scope.delayedInit = function() {
		initKinetic();
		initCircles();
	};
	
	$timeout(function() {
		$scope.delayedInit();
	}, 500);
	


};




// the dialog is injected into the specified controller
clusterWheel.ProjectDialogController = function($scope, $rootScope, dialog){
	$scope.project = $rootScope.project;
	$scope.close = function(result){
		dialog.close(result);
	};
};