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

	var initCircles = function() {
		
Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for single tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
};
		var dataLessons = [
		    {
		        value: 300,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Red"
		    },
		    {
		        value: 50,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "Green"
		    },
		    {
		        value: 100,
		        color: "#FDB45C",
		        highlight: "#FFC870",
		        label: "Yellow"
		    }
		];
		var options = {
			segmentShowStroke : true,
			segmentStrokeColor : "#fff",
			segmentStrokeWidth : 2,
			percentageInnerCutout : 91, // This is 0 for Pie charts
			animationSteps : 100,
			animationEasing : "easeOutQuart",
			animateRotate : true,
			animateScale : false,
			tooltipTemplate : "<%if (label){%><%=label%>: <%}%><%= value %>",
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
		};
		var cLessons = document.getElementById("circleLessons").getContext("2d");
		var cLessonsChart = new Chart(cLessons).Doughnut($scope.clusters, options);
		options.percentageInnerCutout = 80;
		options.animationSteps = 80;
		var cTopics = document.getElementById("circleTopics").getContext("2d");
		var cTopicsChart = new Chart(cTopics).Doughnut(dataLessons, options);
		options.percentageInnerCutout = 40;
		options.animationSteps = 60;
		var cClusters = document.getElementById("circleClusters").getContext("2d");
		var cClustersChart = new Chart(cClusters).Doughnut(dataLessons, options);
	};
	
	/*
	 * Called after timeout so browser has a chance to render before impress is run
	 */
	$scope.delayedInit = function() {
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