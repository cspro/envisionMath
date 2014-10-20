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
	
	
	
clusterWheel.MainCtrl = function($scope, $http, $location, $rootScope, $sce, $timeout) {

	$http.get('data/cluster_data.json')
		.success(function(result) {
			var gradients = result['gradients'];
			var grades = result['grades'];
			angular.forEach(grades, function(grade) {
				var clusters = grade.clusters;
				angular.forEach(clusters, function(cluster) {
					cluster.gradient = gradients[cluster.color];
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
	};
	
	init();
	
	$scope.reset = function($event) {
		if ($event) {
			$event.preventDefault();
		}	
		$location.search("");
		init();
	};
	
	/*
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
	*/
	
	var stageSize = 500;

	$scope.circleConfig = {
		innerRadius : stageSize * 0.15,                                              
		clustersRadius : stageSize * 0.35,                                             
		topicsRadius : stageSize * 0.45,                                             
		lessonsRadius : stageSize * 0.5,                                              
		radialSpacing : 2, // degrees of padding between clusters
		concentricSpacing: 0,// stageSize * 0.01, // space between circles (radial pixels)
		x: stageSize * 0.5,
		y: stageSize * 0.5,
		labelColor: '#ffffff',
		labelSize: 13,
		labelWidth: 100,
		labelHeight: 15,
		upOpacity: 1,
		overOpacity: 0.8,
		downOpacity: 0.25,
		selectionUpOpacity: 0.65,
		selectionOverOpacity: 0.35,
		selectionStrokeColor: 'white',
		selectionStrokeWidth: 6,
	};
	
	var initKinetic = function() {
		$scope.stage = new Kinetic.Stage({
			container: 'kinetic',
			width: stageSize,
			height: stageSize
		});

	};

	var deselectAll = function(collection) {
		angular.forEach(collection, function(item) {
			item.selected = false;
		});
	};
	
	var setCluster = function(cluster) {
		deselectAll($scope.clusters);
		deselectAll($scope.topics);
		deselectAll($scope.lessons);
		cluster.selected = true;
		$scope.currCluster = cluster;
		$scope.currTopic = cluster.topics[0];
		$scope.$apply();
	};

	var setTopic = function(topic) {
		deselectAll($scope.topics);
		deselectAll($scope.lessons);
		topic.selected = true;
		$scope.currTopic = topic;
		$scope.currCluster = topic.cluster;
		$scope.$apply();
	};
	
	var setLesson = function(lesson) {
		deselectAll($scope.lessons);
		lesson.selected = true;
		$scope.currLesson = lesson;
		$scope.currTopic = lesson.topic;
		$scope.currCluster = lesson.topic.cluster;
		$scope.$apply();
	};
	
	var initCircles = function() {
		var clusterCount = $scope.clusters.length;
		for (var i=0; i < clusterCount; i++) {
			var cluster = $scope.clusters[i];
			cluster.type = "cluster";
			cluster.label = cluster.id;
			cluster.title = cluster.title == "" ? "[Cluster title]" : cluster.title;
			cluster.desc = cluster.desc == "" ? "[Cluster description]" : cluster.desc;
			cluster.lessons = [];
			var topics = cluster.topics;
			for (var j=0; j<topics.length; j++) {
				var topic = topics[j];
				topic.type = "topic";
				topic.id = cluster.id + "." + (j+1);
				topic.cluster = cluster;
				topic.label = $scope.topics.length+1;
				topic.title = topic.title == "" ? "[Topic title]" : topic.title;
				$scope.topics.push(topic);
				var lessons = topic.lessons;
				for (var k=0; k<lessons.length; k++) {
					var lesson = lessons[k];
					lesson.type = "lesson";
					lesson.id = topic.label + "-" + (k+1);
					lesson.title = lesson.title == "" ? "[Lesson title]" : lesson.title; 
					lesson.topic = topic;
					lesson.cluster = cluster;
					cluster.lessons.push(lesson);
					$scope.lessons.push(lesson);
				}
			}
		}
		$scope.circleConfig.lessonAngleSize = (360 - ((clusterCount) * $scope.circleConfig.radialSpacing)) / $scope.lessons.length;
		$scope.allArcs = [];
		drawClusters($scope.circleConfig);
		drawBorderCircles($scope.circleConfig);
		setCluster($scope.clusters[0]);
		$scope.stage.draw();
	};
	
	var drawArc = function(arc) {
		var drawnArc = new Kinetic.Arc({
		  innerRadius: arc.innerRadius,
		  outerRadius: arc.outerRadius,
		  rotation: arc.startAngle,
		  fillRadialGradientColorStops: arc.gradient,
		  fillRadialGradientEndRadius: arc.outerRadius,
		  angle: arc.angleSize,
		  stroke: '',
		  strokeWidth: 0,
		});
		$scope.allArcs.push(drawnArc);
		return drawnArc;
	};
	
	var drawArcLabel = function(config, arc, layer) {
		var r = (arc.innerRadius + arc.outerRadius)/2;
		if (arc.type == "cluster") {
			r += r*0.175;
		}
		var a = (arc.startAngle + (arc.angleSize/2)) * (Math.PI/180);
		var x = (r * Math.cos(a)) - config.labelWidth/2;
		var y = (r * Math.sin(a)) - config.labelHeight/2;
		var s = arc.fontScale ? config.labelSize*arc.fontScale : config.labelSize;
		var t = new Kinetic.Text({
			x: x,
			y: y,
			width: config.labelWidth,
			height: config.labelHeight,
			text: arc.label,
			fontSize: s,
			fontFamily: 'Open Sans',
			fill: config.labelColor,
			align: 'center',
			shadowEnabled: true,
			shadowOffset: {x:1, y:2},
			shadowOpacity: 0.35,
			shadowColor: 'black'
		});
		t.setListening(false);
		layer.add(t);
	};
	
	var getSelection = function(arc) {
		var selection = [];
		if (arc) {
			selection = [arc];
			switch (arc.data.type) {
				case "cluster":
					for (var i=0; i<arc.data.topics.length; i++) {
						var topic = arc.data.topics[i];
						selection.push(topic.shape);
						for (var j=0; j<topic.lessons.length; j++) {
							var lesson = topic.lessons[j];
							selection.push(lesson.shape);
						}
					}
					break;
				case "topic":
					selection.push(arc.data.cluster.shape);
					for (var i=0; i<arc.data.lessons.length; i++) {
						var lesson = arc.data.lessons[i];
						selection.push(lesson.shape);
					}
					break;
				case "lesson":
					selection.push(arc.data.topic.cluster.shape);
					selection.push(arc.data.topic.shape);
					break;
			};
		} else {
			selection = [];
		};
		return selection;
	};
	
	var setRolloverState = function(arc) {
		var currSelection = getSelection(arc);
		if (arc) {
      document.body.style.cursor = 'pointer';
		} else {
      document.body.style.cursor = 'auto';
		};
		angular.forEach($scope.allArcs, function(a) {
			if ($scope.selection && $scope.selection.indexOf(a) > -1) {
				a.opacity($scope.circleConfig.selectionUpOpacity);
			} else {
				a.opacity($scope.circleConfig.upOpacity);
			}
		});
		angular.forEach(currSelection, function(a) {
			if ($scope.selection && $scope.selection.indexOf(a) > -1) {
				a.opacity($scope.circleConfig.selectionOverOpacity);
			} else {
				a.opacity($scope.circleConfig.selectionUpOpacity);
			}
		});
		// if ($scope.selection && $scope.selection.indexOf(arc) > -1) {
			// if (arc) arc.opacity($scope.circleConfig.overOpacity);
		// }
		$scope.arcLayer.draw();
	};
	
	var setSelectionState = function(arc) {
		var currSelection = getSelection(arc);
		angular.forEach($scope.allArcs, function(a) {
			a.opacity($scope.circleConfig.upOpacity);
		});
		angular.forEach($scope.selection, function(a) {
			a.opacity($scope.circleConfig.selectionUpOpacity);
		});
		$scope.selection = currSelection;
		$scope.arcLayer.draw();
	};
	
	var setMousedownState = function(arc) {
		var currSelection = getSelection(arc);
		angular.forEach(currSelection, function(a) {
			a.opacity($scope.circleConfig.downOpacity);
		});
		$scope.arcLayer.draw();
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
			var angleSize = cluster.lessons.length * config.lessonAngleSize;
			cluster.startAngle = startAngle;
			cluster.angleSize = angleSize;
			var arc = drawArc(cluster);
			arc.data = cluster;
			arc.on('mouseenter', function(){
					setRolloverState(this);
				});
			arc.on('mouseleave', function(){
					setRolloverState(null);
				});
			arc.on('mousedown', function(){
					setMousedownState(this);
				});
			arc.on('click', function(){
					setCluster(this.data);
					setSelectionState(this);
					setRolloverState(this);
				});
			cluster.layer = layer;
			cluster.shape = arc;
			drawArcLabel(config, cluster, textLayer);
			layer.add(arc);
			drawTopics(config, cluster, startAngle);
			startAngle += angleSize + config.radialSpacing;
		}
		$scope.arcLayer = layer;
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
			topic.angleSize = topic.lessons.length * config.lessonAngleSize;
			topic.startAngle = startAngle;
			topic.gradient = topic.cluster.gradient;
			var arc = drawArc(topic);
			arc.data = topic;
			arc.on('mouseenter', function(){
					setRolloverState(this);
				});
			arc.on('mouseleave', function(){
					setRolloverState(null);
				});
			arc.on('mousedown', function(){
					setMousedownState(this);
				});
			arc.on('click', function(){
					setTopic(this.data);
					setSelectionState(this);
					setRolloverState(this);
				});
			topic.layer = layer;
			topic.shape = arc;
			layer.add(arc);
			drawArcLabel(config, topic, layer);
			drawLessons(config, topic, startAngle);
			if (i > 0) {
				var a = startAngle * (Math.PI/180);
				var line = new Kinetic.Line({
					points: [
							(config.clustersRadius * Math.cos(a)), (config.clustersRadius * Math.sin(a)),
							(config.lessonsRadius * Math.cos(a)), (config.lessonsRadius * Math.sin(a))
						],
					stroke: 'white',
					strokeWidth: 3,
					listening: false
				});
				layer.add(line);
			}
			startAngle += topic.angleSize;
		}
	};
	
	var drawLessons = function(config, topic, startAngle) {
		var lessons = topic.lessons;
		var layer = topic.layer;
		var lessonSpacing = 0; //config.radialSpacing / 4;
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
			arc.on('mouseenter', function(){
					setRolloverState(this);
				});
			arc.on('mouseleave', function(){
					setRolloverState(null);
				});
			arc.on('mousedown', function(){
					setMousedownState(this);
				});
			arc.on('click', function(){
					setLesson(this.data);
					setSelectionState(this);
					setRolloverState(this);
				});
			lesson.layer = layer;
			lesson.shape = arc;
			layer.add(arc);
			if (i > 0) {
				var a = startAngle * (Math.PI/180);
				var line = new Kinetic.Line({
					points: [
							(config.topicsRadius * Math.cos(a)), (config.topicsRadius * Math.sin(a)),
							(config.lessonsRadius * Math.cos(a)), (config.lessonsRadius * Math.sin(a))
						],
					stroke: 'white',
					strokeWidth: 1,
					listening: false
				});
				layer.add(line);
			}
			startAngle += angleInterval;
		}
	};
	
	var drawBorderCircles = function(config) {
		var vars = {
			stroke: 'white',
			strokeWidth: 5,
			listening: false
		};
		vars.radius = config.innerRadius;
		var inner = new Kinetic.Circle(vars);
		$scope.arcLayer.add(inner);
		
		vars.radius = config.clustersRadius;
		var clusters = new Kinetic.Circle(vars);
		$scope.arcLayer.add(clusters);
		
		vars.radius = config.topicsRadius;
		var topics = new Kinetic.Circle(vars);
		$scope.arcLayer.add(topics);
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

/*
// the dialog is injected into the specified controller
clusterWheel.ProjectDialogController = function($scope, $rootScope, dialog){
	$scope.project = $rootScope.project;
	$scope.close = function(result){
		dialog.close(result);
	};
};
*/