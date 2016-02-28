var ref = new Firebase("https://paktutor.firebaseio.com");
var user;

function loginGoogle() {
	ref.authWithOAuthRedirect("google", function(error) {
		if (error) {
			console.log("Authentication Failed!", error);
		}
	}, {
		remember: "sessionOnly"
	});
}

// Logged in
ref.onAuth(function(authData) {
	if(authData)
	{
		user = new Firebase("https://paktutor.firebaseio.com/users/" + authData.uid);
		user.update({"name": authData.google.displayName});
		$("#navMenu span").append("Hi, " + authData.google.displayName);
		setTimeout(function() {
			window.location = "home.html";
		}, 2000);
	}
});
//

$(document).ready(function() {
	var src = $("#googleLogin").attr("src");
				
	$("#googleLogin").hover(function() {
		$(this).attr("src", "google/google_light_focus.png");
		
		$("#googleLogin").mousedown(function() {
			$(this).attr("src", "google/google_light_pressed.png");
		});
		$("#googleLogin").mouseup(function() {
			$(this).attr("src", "google/google_light_focus.png");
			loginGoogle();
		});
		}, function() {
			$(this).attr("src", src);
	});
});
