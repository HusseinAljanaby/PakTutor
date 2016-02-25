var ref = new Firebase("https://paktutor.firebaseio.com");
var auth = ref.getAuth();
var user;

// Logged in
if(ref.getAuth() != null) {
	user = new Firebase("https://paktutor.firebaseio.com/users/" + auth.uid);
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
