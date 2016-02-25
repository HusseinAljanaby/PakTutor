var ref = new Firebase("https://paktutor.firebaseio.com");
var auth = ref.getAuth();
var user;

// Logged in
if(ref.getAuth() != null) {
	user = new Firebase("https://paktutor.firebaseio.com/users/" + auth.uid);
	user.set({"name": auth.google.displayName});
}
//

function loginGoogle() {
	ref.authWithOAuthRedirect("google", function(error) {
		if (error) {
			console.log("Authentication Failed!", error);
		}
	}, {
		remember: "sessionOnly"
	});
}

$(document).ready(function() {
	if (ref.getAuth() != null) {
		$("#navMenu span").append("Hi, " + ref.getAuth().google.displayName);
	}
	
	var src = $("#googleLogin").attr("src");
				
	$("#googleLogin").hover( function() {
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
