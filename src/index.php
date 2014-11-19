<!DOCTYPE html>
<html ng-app="clusterWheel.App">
	<head>
		<?php
			$host = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
			$path = '';
			if (strpos($host, 'localhost') !== FALSE) {
				$path = '/cs/webapps/envisionMath/src/';
			} elseif (strpos($host, 'dev') !== FALSE) {
				$path = '/cs/dev/envisionMath/';
			} else {
				$path = '/cs/webapps/envisionMath/';
			}
			echo "<base href=\"" . $path . "\"/>";
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
		<script src="js/vendor/ui-bootstrap-tpls-0.12.0.min.js"></script>
		<script src="js/vendor/kinetic-v5.1.0.min.js"></script>
		<script src="data/cluster_data.js" type="text/javascript"></script>
		<script src="js/clusterWheelApp.js" type="text/javascript"></script>

	</head>
	<body>
			<div class="container" ng-view></div>
<!-- <div ng-controller="ModalDemoCtrl">			
    <script type="text/ng-template" id="myModalContent.html">
        <div class="modal-header">
            <h3 class="modal-title">I'm a modal!</h3>
        </div>
        <div class="modal-body">
            <ul>
                <li ng-repeat="item in items">
                    <a ng-click="selected.item = item">{{ item }}</a>
                </li>
            </ul>
            Selected: <b>{{ selected.item }}</b>        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" ng-click="ok()">OK</button>
            <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
        </div>
    </script>
</div> -->	</body>
</html>
