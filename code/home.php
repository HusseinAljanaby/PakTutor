<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	
	<!--
	Links
	-->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
	<link href='https://fonts.googleapis.com/css?family=Roboto:500' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' type='text/css' href='style.css'>
	<script src="js/home.js"></script>
</head>
<body>
	<div id="navMenu">
	</div>
	
	<div id="profile">
		<h1>
			Profile
		</h1>
		<div id="info">
			<div id="left">
				<div id="piContainer">
					<img id="profileImage" src="https://www.nerdist.com/wp-content/uploads/2014/02/Beta-Test-NerdMelt-Showroom.jpg">
					<div id="changeImage">Update Profile Picture</div>
				</div>
				<textarea class="profileInput" id="bio"></textarea>
				<div id="stats">
					*Stats*
				</div>
			</div>
			
			<div id="right">
				<div id="inline">
					<div id="tutorInfo" class="infoNav">
						Tutoring
					</div><div id="accountInfo" class="infoNav">
						Account Information
					</div><div id="persInfo" class="infoNav">
						Personal Information
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<footer>
		PakTutor™ Alpha v0.01
		<br>
		Copyright © 2016 Hussein Aljanaby
	</footer>
</body>
