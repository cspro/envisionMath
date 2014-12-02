<!DOCTYPE html>
<html ng-app="clusterWheel.App">
	<head>
		<?php
			echo "<base href=\"" . $_SERVER['REQUEST_URI'] . "\"/>";
		?>
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>EnvisionMath Cluster Wheel</title>
		
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css'>
		<link href="css/vendor/bootstrap.css" rel="stylesheet" />
		<link href="css/cluster_wheel.css" rel="stylesheet" />

		<script src="js/vendor/angular.min.js.map"></script>
		<script src="js/vendor/angular.1.2.26.min.js"></script>
		<script src="js/vendor/angular-route.js"></script>
		<script src="js/vendor/angular-animate.js"></script>
		<script src="js/vendor/ui-bootstrap-tpls-0.12.0.js"></script> <!-- Do not replace; code is modified -->
		<script src="js/vendor/kinetic-v5.1.0.min.js"></script>
		<script src="data/cluster_data.js" type="text/javascript"></script>
		<script src="js/wheel.js" type="text/javascript"></script>
		<script src="js/clusterWheelApp.js" type="text/javascript"></script>

	</head>
	<body>
			<div class="container" ng-view></div>
	</body>
</html>
