﻿<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	
	<!--
	Links
	-->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
	<link href='https://fonts.googleapis.com/css?family=Roboto:500' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' type='text/css' href='style.css'>
	<script src="js/index.js"></script>
</head>
<body>
	<div id="navMenu">
	<span style="position: absolute; margin: auto auto; left: 0; right: 0; top: 6%;"></span>
	</div>
	
	<div id="inline">
		<div id="login">
			<input type="text" id="loginUsername" placeholder="Email">
			<input type="password" id="loginPassword" placeholder="Password">
			<div id="loginButton"><span>Login</span></div>
			<img id="googleLogin" src="google/google_light_normal.png">
		</div><div id="signUp">
			<input type="text" class="signUpInput" placeholder="Email">
			<input type="password" class="signUpInput" placeholder="Password">
			<input type="password" class="signUpInput" placeholder="Repeat Password">
		</div>
	</div>
	
	<!-- Video
	<div class="fullscreen-bg">
		<video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
			<source src="background.mp4" type="video/webm">
		</video>
	</div>
	-->
	
	<footer>
		PakTutor™ Alpha v0.01
		<br>
		Copyright © 2016 Hussein Aljanaby
	</footer>
</body>
