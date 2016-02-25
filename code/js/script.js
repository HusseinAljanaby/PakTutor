var ref = new Firebase("https://paktutor.firebaseio.com");

// Redirecting

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