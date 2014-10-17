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
			var gradients = result['gradients'];
			var grades = result['grades'];
			angular.forEach(grades, function(grade) {
				var clusters = grade.clusters;
				angular.forEach(clusters, function(cluster) {
					cluster.value = cluster.topics.length;
					cluster.gradient = gradients[cluster.color];
					// cluster.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				});
			});
			$scope.grades = grades;
			$scope.clusters = grades['g4']['clusters']; // for now
			$scope.topics = [];
			$scope.lessons = [];
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
		concentricSpacing: stageSize * 0.01, // space between circles (radial pixels)
		x: stageSize * 0.5,
		y: stageSize * 0.5,
		labelColor: '#ffffff',
		labelSize: 13,
		labelWidth: 100,
		labelHeight: 15,
		upOpacity: 1,
		overOpacity: 0.75,
		downOpacity: 0.5
	};
	
	var initKinetic = function() {
		$scope.stage = new Kinetic.Stage({
			container: 'kinetic',
			width: stageSize,
			height: stageSize
		});

	};

	var setCluster = function(cluster) {
		$scope.cluster = cluster;
		$scope.$apply();
	};

	var setTopic = function(topic) {
		$scope.topic = topic;
		$scope.$apply();
	};

	var initCircles = function() {
		var totalTopics = 0;
		var totalClusters = $scope.clusters.length;
		var topicCount = 0;
		for (var i=0; i < totalClusters; i++) {
			var cluster = $scope.clusters[i];
			cluster.label = cluster.id;
			cluster.title = cluster.title == "" ? "[Cluster title]" : cluster.title;
			cluster.desc = cluster.desc == "" ? "[Cluster description]" : cluster.desc;
			var topics = cluster.topics;
			totalTopics += topics.length;
			for (var j=0; j<topics.length; j++) {
				var topic = topics[j];
				topic.id = cluster.id + "." + (j+1);
				topic.cluster = cluster;
				topicCount++;
				topic.label = topicCount;
				topic.title = topic.title == "" ? "[Topic title]" : topic.title;
				var lessons = topic.lessons;
				for (var k=0; k<lessons.length; k++) {
					var lesson = lessons[k];
					lesson.id = topic.id + "-" + (k+1);
					lesson.title = lesson.title == "" ? "[Lesson title]" : lesson.title; 
					lesson.topic = topic;
					lesson.cluster = cluster;
				}
			}
		}
		$scope.circleConfig.topicAngleSize = (360 - ((totalClusters) * $scope.circleConfig.radialSpacing)) / totalTopics;
		$scope.circleConfig.interTopicSpacing = ((totalTopics - totalClusters) * $scope.circleConfig.radialSpacing) / totalTopics;
		drawClusters($scope.circleConfig);
		setCluster($scope.clusters[0]);
		setTopic($scope.clusters[0].topics[0]);
	};
	
	var drawArc = function(arc) {
		return new Kinetic.Arc({
		  innerRadius: arc.innerRadius,
		  outerRadius: arc.outerRadius,
		  rotation: arc.startAngle,
		  fillRadialGradientColorStops: arc.gradient,
		  fillRadialGradientEndRadius: arc.outerRadius,
		  angle: arc.angleSize,
		  stroke: '',
		  strokeWidth: 0,
		});
	};
	
	var drawArcLabel = function(config, arc, layer) {
		var r = (arc.innerRadius + arc.outerRadius)/2;
		var a = (arc.startAngle + (arc.angleSize/2)) * (Math.PI/180);
		var x = (r * Math.cos(a)) - config.labelWidth/2;
		var y = (r * Math.sin(a)) - config.labelHeight/2;
		var t = new Kinetic.Text({
			x: x,
			y: y,
			width: config.labelWidth,
			height: config.labelHeight,
			text: arc.label,
			fontSize: config.labelSize,
			fontFamily: 'Arial',
			fill: config.labelColor,
			align: 'center'
		});
		t.setListening(false);
		layer.add(t);
	};
	

	
	var drawClusters = function(config) {
		var layer = new Kinetic.Layer({
			x: config.x,
			y: config.y
		});
		var textLayer = new Kinetic.Layer({
			x: config.x,
			y: config.y
		});
		var startAngle = -90 + config.radialSpacing;
		for (var i=0; i < $scope.clusters.length; i++) {
			var cluster = $scope.clusters[i];
			cluster.innerRadius = config.innerRadius + config.concentricSpacing;
			cluster.outerRadius = config.clustersRadius;
			var angleSize = cluster.topics.length * config.topicAngleSize;
			cluster.startAngle = startAngle;
			cluster.angleSize = angleSize;
			var arc = drawArc(cluster);
			arc.data = cluster;
			arc.on('mouseover', function(){
					this.opacity(config.overOpacity);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(config.upOpacity);
					this.parent.drawScene();
				});
			arc.on('click', function(){
					setCluster(this.data);
					setTopic(this.data.topics[0]);
				});
			cluster.layer = layer;
			cluster.shape = arc;
			drawArcLabel(config, cluster, textLayer);
			layer.add(arc);
			drawTopics(config, cluster, startAngle);
			startAngle += angleSize + config.radialSpacing;
		}
		$scope.stage.add(layer);
		$scope.stage.add(textLayer);
	};
	
	var drawTopics = function(config, cluster, startAngle) {
		var topics = cluster.topics;
		var layer = cluster.layer;
		for (var i=0; i < topics.length; i++) {
			var topic = topics[i];
			topic.innerRadius = cluster.outerRadius + config.concentricSpacing;
			topic.outerRadius = config.topicsRadius;
			topic.angleSize = config.topicAngleSize;
			if (topics.length > 1) {
				topic.angleSize -= config.interTopicSpacing;
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
			topic.startAngle = startAngle;
			topic.gradient = topic.cluster.gradient;
			var arc = drawArc(topic);
			arc.data = topic;
			arc.on('mouseover', function(){
					this.opacity(config.overOpacity);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(config.upOpacity);
					this.parent.drawScene();
				});
			arc.on('click', function(){
					setTopic(this.data);
					setCluster(this.data.cluster);
				});
			topic.layer = layer;
			topic.shape = arc;
			layer.add(arc);
			drawArcLabel(config, topic, layer);
			drawLessons(config, topic, startAngle);
			startAngle += config.topicAngleSize;
		}
	};
	
	var drawLessons = function(config, topic, startAngle) {
		var lessons = topic.lessons;
		var layer = topic.layer;
		var lessonSpacing = config.radialSpacing / 4;
		startAngle += lessonSpacing/2;
		var angleInterval = (topic.angleSize/lessons.length);
		var angleSize = angleInterval - ((lessons.length-1) * lessonSpacing)/lessons.length;
		for (var i=0; i < lessons.length; i++) {
			var lesson = lessons[i];
			lesson.innerRadius = topic.outerRadius + config.concentricSpacing;
			lesson.outerRadius = config.lessonsRadius;
			lesson.startAngle = startAngle;
			lesson.gradient = topic.cluster.gradient;
			lesson.angleSize = angleSize;
			var arc = drawArc(lesson);
			arc.data = lesson;
			arc.on('mouseover', function(){
					this.opacity(config.overOpacity);
					this.parent.draw();
				});
			arc.on('mouseout', function(){
					this.opacity(config.upOpacity);
					this.parent.drawScene();
				});
			lesson.layer = layer;
			lesson.shape = arc;
			layer.add(arc);
			startAngle += angleInterval;
		}
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